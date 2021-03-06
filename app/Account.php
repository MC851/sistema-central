<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = ['rfid_key', 'balance', 'user_id'];

    public function user()
    {
        return $this->belongsTo(\App\User::class);
    }
}
