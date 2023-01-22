<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Client;
use App\Models\Invoice;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Mickael',
            'email' => 'mickael@freelance.blue',
            'password' => '$2y$10$EN25.Qq8RS94T.AAdEfjrOG47bjSDuvpaGHlFvyVuPxoUOWjyuhxi' // test1234
        ]);
        Client::factory()->count(10)->create();
        Invoice::factory()->count(80)->create([
            'status' => 'payée'
        ]);
        Invoice::factory()->count(5)->create([
            'status' => 'envoyée',
            'paid_at' => null,
        ]);
    }
}
