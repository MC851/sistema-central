<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use \Illuminate\Http\Request;
use \Illuminate\Support\Facades\Auth;
use \App\Account;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except(['logout', 'destroy']);
    }

    public function validateLogin(Request $request)
    {
        if ($request->get('rfid_key')) {
            $this->validate($request, [
                'rfid_key' => 'required',
                'password' => 'required',
            ]);
        } else {
            $this->validate($request, [
                'email' => 'required',
                'password' => 'required',
            ]);
        }
    }

    public function attemptLogin(Request $request)
    {
        if ($request->filled('rfid_key')) {
            $email = Account::where('rfid_key', '=', request('rfid_key'))->first()->user->email;
        } else {
            $email = request('email');
        }

        return $this->guard()->attempt([
            'email' => $email,
            'password' => request('password'),
        ], $request->filled('remember'));
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            $user = $this->guard()->user();
            $user->generateToken();

            return response()->json([
                'data' => $user->toArray(),
            ]);
        }

        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();

        if ($user) {
            $user->api_token = null;
            $user->save();
        }

        return response()->json(['data' => 'User logged out.'], 200);
    }

    public function destroy(Request $request)
    {
        $user = Auth::guard('api')->user();

        $user->account->delete();
        $user->payments->delete();
        $user->delete();

        return response()->json(['data' => 'User deleted.'], 200);
    }
}
