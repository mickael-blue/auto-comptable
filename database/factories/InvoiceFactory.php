<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Invoice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Invoice::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $amount_with_vat = fake()->randomNumber(4, true);
        $vat = $amount_with_vat * 20 / 100;
        $amount = $amount_with_vat - $vat;


        $createdAt = fake()->dateTimeBetween('-5 years');
        $status = 'payée'; // Pas d'annulées
        $updatedAt = $sent_at = fake()->dateTimeInInterval($createdAt, '+20 days');
        $paid_at = fake()->dateTimeInInterval($sent_at, '+25 days');

        return [
            'number' => fake()->numerify(),
            'client_id' => Client::all()->random(),
            'status' => $status,
            'sent_at' => $sent_at,
            'paid_at' => $paid_at,
            'with_vat' => fake()->boolean(),
            'title' => fake()->sentence(),
            'amount' => $amount,
            'amount_with_vat' => $amount_with_vat,
            'vat' => $vat,
            'payment_mode' => fake()->randomElement(['chèque', 'virement', 'autre']),
            'created_at'=> $createdAt,
            'updated_at'=> $updatedAt,
        ];
    }
}
