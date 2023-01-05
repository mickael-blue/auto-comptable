<?php

namespace Database\Factories;

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

        $amount_with_vat = fake()->randomNumber(5, true);
        $vat = $amount_with_vat * 20 / 100;
        $amount = $amount_with_vat - $vat;

        return [
            'number' => fake()->numberBetween(0, 100),
            'client_id' => Invoice::all()->random(),
            'edited_at' => fake()->date(),
            'paid_at' => fake()->date(),
            'with_vat' => fake()->boolean(),
            'sent' => fake()->boolean(),
            'payment_received' => fake()->boolean(),
            'title' => fake()->sentence(),
            'amount' => $amount,
            'amount_with_vat' => $amount_with_vat,
            'vat' => $vat,
            'payment_mode' => fake()->randomElement(['chèque','virement','autre'])
        ];
    }
}
