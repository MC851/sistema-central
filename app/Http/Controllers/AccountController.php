<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\Hash;
use App\Transfer;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $accounts = Account::all();

        return view('accounts.listing', compact('accounts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'rfid_key' => 'required|string|max:255|unique:accounts',
        ]);

        $user = User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
        ]);

        $account = Account::create([
            'user_id' => $user->id,
            'balance' => 0,
            'rfid_key' => request('rfid_key'),
        ]);

        return redirect('/accounts');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        return view('accounts.view', compact('account'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Account $account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        //
    }

    public function transfer() {
        $this->validate(request(), [
            'to' => 'required|email',
            'ammount' => 'required|integer',
        ]);

        $user = Auth::guard('api')->user();

        $toEmail = request('to');

        $userTo = User::where('email', '=', $toEmail)->first();

        if (!$userTo) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        $transfer = new Transfer();
        $transfer->to_user_id = $userTo->id;
        $transfer->user_id = $user->id;
        $transfer->ammount = request('ammount');
        $transfer->save();

        $user->account->balance = $user->account->balance - request('ammount');
        $user->account->save();

        $userTo->account->balance = $userTo->account->balance + request('ammount');
        $userTo->account->save();

        return response()->json([
            'message' => 'Success.',
            'balance' => $user->account->balance,
        ], 200);
    }
}
