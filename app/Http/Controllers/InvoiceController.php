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
use App\Http\Resources\InvoiceClientCollection;
use App\Http\Resources\InvoiceTrimesterCollection;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($year = null)
    {
        if(!is_null($year)){
            $data = $this->all_by_year($year);
        }else{
            $data = $this->all_by_year(date('Y'));
        }
        return Inertia::render('Invoices/Index', $data);
    }

    public function all_by_year($year) {
        $invoices = Invoice::orderBy('created_at', 'desc')
            ->byYear($year)
            ->paginate()
            ->appends(Request::all());
        $invoicesMonthly = InvoiceService::monthlyStats($invoices);
        $invoicesTrimesters = InvoiceService::trimestersStats($invoices);
        $invoicesClient = InvoiceService::clientsStats($invoices);
        $invoicesTotals = InvoiceService::totals($invoices);

        return [
            'invoices' => new InvoiceCollection($invoices),
            'months' => new InvoiceMonthCollection($invoicesMonthly),
            'trimesters' => new InvoiceTrimesterCollection($invoicesTrimesters),
            'clients' => new InvoiceClientCollection($invoicesClient),
            'totals' => $invoicesTotals,
            'year' => $year
        ];

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
        $invoicesTrimesters = InvoiceService::trimestersStats($invoicesYear);
        $invoicesTotals = InvoiceService::totals($invoicesYear);

        return Inertia::render('Invoices/CurrentYear', [
            'invoices' => new InvoiceCollection($invoicesYear),
            'months' => new InvoiceMonthCollection($invoicesMonthly),
            'totals' => $invoicesTotals,
            'trimesters' => $invoicesTrimesters,
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
