<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $fillable = ['to', 'ammount', 'from'];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
