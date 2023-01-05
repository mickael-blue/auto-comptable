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
            $table->date('edited_at');
            $table->date('paid_at');
            $table->boolean('with_vat');
            $table->boolean('sent');
            $table->boolean('payment_received');
            $table->char('title', 255);
            $table->float('amount');
            $table->float('amount_with_vat');
            $table->float('vat');
            $table->enum('payment_mode', ['chèque','virement','autre']);
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
