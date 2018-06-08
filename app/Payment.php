<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['description', 'user_id', 'price'];

    public function user()
    {
        return $this->belongsTo(\App\User::class);
    }
}
