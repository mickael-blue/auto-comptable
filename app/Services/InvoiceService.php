<?php

namespace App\Services;

use App\Models\Invoice;

class InvoiceService {

    public static function byYear($year)
    {

        $invoicesYear = Invoice::orderBy('number')
            ->byYear($year);
        return $invoicesYear;
    }

    public static function monthlyStats($listInvoices)
    {

        $monthly = [];
        foreach($listInvoices as $invoice)
        {
            if(isset($monthly[date('n', strtotime($invoice->created_at))])){
                $monthly[date('n', strtotime($invoice->created_at))]['amount_with_vat'] += $invoice->amount_with_vat;
                $monthly[date('n', strtotime($invoice->created_at))]['amount'] += $invoice->amount;
                $monthly[date('n', strtotime($invoice->created_at))]['vat'] += $invoice->vat;
            }else{
                $monthly[date('n', strtotime($invoice->created_at))]['amount_with_vat'] = $invoice->amount_with_vat;
                $monthly[date('n', strtotime($invoice->created_at))]['amount'] = $invoice->amount;
                $monthly[date('n', strtotime($invoice->created_at))]['vat'] = $invoice->vat;
                $monthly[date('n', strtotime($invoice->created_at))]['label'] = date('F', strtotime($invoice->created_at));
                $monthly[date('n', strtotime($invoice->created_at))]['month'] = date('m', strtotime($invoice->created_at));
            }
        }
        return $monthly;
    }



    public static function totals($listInvoices)
    {
        $invoiceCached = 0;

        foreach($listInvoices as $invoice){
            switch($invoice->status ){
                //case 'editions';
                case 'envoyée';
                    $invoiceCached += $invoice->amount;
                    break;
            }
        }


        $totals = [
            'amount_with_vat_total' => $listInvoices->sum('amount_with_vat'),
            'amount_total' => $listInvoices->sum('amount'),
            'vat_total' => $listInvoices->sum('vat'),
            'cached' => $invoiceCached,
            'to_cached' => $listInvoices->sum('amount') - $invoiceCached,
            'contribution' => $invoiceCached * 23.6 / 100,
        ];

        return collect($totals);
    }

}
