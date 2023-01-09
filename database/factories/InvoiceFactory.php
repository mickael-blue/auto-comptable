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


        $editedAt = fake()->dateTimeBetween('-2 years');
        $payment_received = fake()->boolean();

        return [
            'number' => fake()->numberBetween(0, 100),
            'client_id' => Client::all()->random(),
            'edited_at' => $editedAt,
            'paid_at' => $payment_received?fake()->dateTimeInInterval($editedAt, '+45 days'):null,
            'with_vat' => fake()->boolean(),
            'sent' => 1,
            'payment_received' => $payment_received,
            'title' => fake()->sentence(),
            'amount' => $amount,
            'amount_with_vat' => $amount_with_vat,
            'vat' => $vat,
            'payment_mode' => fake()->randomElement(['chèque','virement','autre'])
        ];
    }
}
