<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use App\Models\Invoice;
use App\Http\Requests\InvoiceRequest;
use App\Http\Resources\InvoiceResource;
use Illuminate\Support\Facades\Request;
use App\Http\Resources\ClientCollection;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\InvoiceMonthCollection;
use App\Http\Resources\InvoicesStatsCollection;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Invoices/Index', [
            'invoices' => new InvoiceCollection(
                Invoice::orderBy('number')
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function current_year($year)
    {
        $invoicesYear = Invoice::orderBy('number')
            ->whereBetween('edited_at', [$year.'-01-01', $year.'-12-31'])
            ->paginate()
            ->appends(Request::all());

        $months = [];
        foreach($invoicesYear as $invoice)
        {

            if(isset($months[date('n', strtotime($invoice->edited_at))])){
                $months[date('n', strtotime($invoice->edited_at))]['amount'] += $invoice->amount_with_vat;
            }else{
                $months[date('n', strtotime($invoice->edited_at))]['amount'] = $invoice->amount_with_vat;
                $months[date('n', strtotime($invoice->edited_at))]['label'] = date('F', strtotime($invoice->edited_at));
            }
        }

        return Inertia::render('Invoices/CurrentYear', [
            'invoices' => new InvoiceCollection($invoicesYear),
            'months' => new InvoiceMonthCollection(collect($months)),
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
        $mangas = Client::all();
        return Inertia::render('Invoices/Create', [
            'mangas' => new ClientCollection($mangas),
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
        $mangas = Client::all();
        return Inertia::render('Invoices/Edit', [
            'invoice' => new InvoiceResource($invoice),
            'mangas' => new ClientCollection($mangas),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(InvoiceRequest $request, Invoice $invoice)
    {
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
