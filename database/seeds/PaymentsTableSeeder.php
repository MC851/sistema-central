<?php

use Illuminate\Database\Seeder;
use App\Account;
use App\Payment;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $accounts = Account::all();
        $faker = \Faker\Factory::create();

        foreach ($accounts as $account) {
            for($i = 0; $i < rand(1, 7); $i++) {
                $price = rand(200, 10000);
                $account->balance = $account->balance - $price;
                $account->save();

                $data = [
                    'description' => $faker->name,
                    'price' => $price,
                ];
                $data['user_id'] = $account->user->id;
                Payment::create($data);
            }
        }
    }
}
