<?php

use Illuminate\Database\Seeder;
use App\User;

class AccountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Account::truncate();

        // First let's create our users.
        $usersSeeder = new UsersTableSeeder();
        $usersSeeder->run();

        $faker = \Faker\Factory::create();

        $users = User::all();
        foreach ($users as $user) {
            \App\Account::create([
                'user_id' => $user->id,
                'rfid_key' => $faker->uuid,
                'balance' => $faker->randomNumber(8),
            ]);
        }
    }
}
