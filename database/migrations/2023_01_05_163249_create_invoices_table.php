<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->char('number', 100);
            $table->foreignId('client_id')->constrained();
            $table->boolean('with_vat');
            $table->float('amount');
            $table->float('amount_with_vat');
            $table->float('vat');
            $table->char('title', 255);
            $table->enum('status', ['édition','envoyée','annulée', 'payée'])->nullable();
            $table->enum('payment_mode', ['chèque','virement','autre'])->nullable();
            $table->date('sent_at')->nullable();
            $table->date('paid_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
};
