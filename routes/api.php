<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    $user = $request->user();
    $data = [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
        'api_token' => $user->api_token,
        'created_at' => $user->created_at,
        'updated_at' => $user->updated_at,
        'balance' => $user->account->balance,
        'rfid_key' => $user->account->rfid_key,
    ];

    return $data;
});

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::middleware('auth:api')->post('/logout', 'Auth\LoginController@logout');
Route::middleware('auth:api')->delete('/delete', 'Auth\LoginController@destroy');

Route::middleware('auth:api')->post('/payments', 'PaymentController@store');
Route::middleware('auth:api')->get('/payments', 'PaymentController@index');

Route::middleware('auth:api')->post('/transfer', 'AccountController@transfer');
