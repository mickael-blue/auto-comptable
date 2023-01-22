<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Invoice Routes
    Route::get('/invoices', [InvoiceController::class, 'index'])->name('invoice.index');
    Route::get('/invoices/{year}', [InvoiceController::class, 'index'])->name('invoice.index_year');
    Route::get('/invoice', [InvoiceController::class, 'create'])->name('invoice.create');
    Route::post('/invoice', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('/invoice/{invoice}', [InvoiceController::class, 'edit'])->name('invoice.edit');
    Route::put('/invoice/{invoice}', [InvoiceController::class, 'update'])->name('invoice.update');
    Route::delete('/invoice/{invoice}', [InvoiceController::class, 'destroy'])->name('invoice.destroy');

    Route::get('/invoices-by-year/{year}', [InvoiceController::class, 'current_year'])->name('invoice.byYear');

    // Client Routes

    Route::get('/clients', [ClientController::class, 'index'])->name('client.index');
    Route::get('/client', [InvoiceController::class, 'create'])->name('client.create');
    Route::post('/client', [InvoiceController::class, 'store'])->name('client.store');
    Route::get('/client/{client}', [InvoiceController::class, 'edit'])->name('client.edit');
    Route::put('/client/{client}', [InvoiceController::class, 'update'])->name('client.update');
    Route::delete('/client/{client}', [InvoiceController::class, 'destroy'])->name('client.destroy');

});

require __DIR__.'/auth.php';
