<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->get('/login', 'Auth\LoginController@loginPage');
Route::get('/', 'Auth\LoginController@index');
Route::post('/login-admin', 'Auth\LoginController@loginAdmin');
Route::get('/accounts', 'AccountController@index');
Route::get('/accounts/{account}', 'AccountController@show');
Route::post('/accounts', 'AccountController@store');
