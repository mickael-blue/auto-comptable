<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use App\Models\Invoice;
use App\Services\InvoiceService;
use App\Http\Requests\InvoiceRequest;
use App\Http\Resources\InvoiceResource;
use Illuminate\Support\Facades\Request;
use App\Http\Resources\ClientCollection;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\InvoiceCollection;
use App\Http\Requests\InvoiceUpdateRequest;
use App\Http\Resources\InvoiceMonthCollection;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($year = null)
    {
        $invoices = Invoice::orderBy('created_at', 'desc');
        if(!is_null($year)){
            $invoices = $invoices->byYear($year);
        }
        $invoices = $invoices
            ->paginate()
            ->appends(Request::all());
        return Inertia::render('Invoices/Index', [
            'invoices' => new InvoiceCollection($invoices),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function current_year($year)
    {
        $invoicesYear = InvoiceService::byYear($year)->get();
        $invoicesMonthly = InvoiceService::monthlyStats($invoicesYear);
        $invoicesTotals = InvoiceService::totals($invoicesYear);

        return Inertia::render('Invoices/CurrentYear', [
            'invoices' => new InvoiceCollection($invoicesYear),
            'months' => new InvoiceMonthCollection($invoicesMonthly),
            'totals' => $invoicesTotals,
            'year' => $year
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clients = Client::all();
        return Inertia::render('Invoices/Create', [
            'clients' => new ClientCollection($clients),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InvoiceRequest $request)
    {
        $invoice = Invoice::create($request->validated());
        $invoice->save();
        return Redirect::route('invoice.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        $clients = Client::all();
        return Inertia::render('Invoices/Edit', [
            'invoice' => new InvoiceResource($invoice),
            'clients' => new ClientCollection($clients),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(InvoiceUpdateRequest $request, Invoice $invoice)
    {
        // dd($request->validated());
        $invoice->update($request->validated());
        return Redirect::route('invoice.edit',$invoice->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return Redirect::route('invoice.index');
    }
}
