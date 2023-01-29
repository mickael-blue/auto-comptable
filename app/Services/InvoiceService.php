<?php

namespace App\Services;

use App\Models\Invoice;

class InvoiceService
{

    public static function byYear($year)
    {

        $invoicesYear = Invoice::orderBy('number')
            ->byYear($year);
        return $invoicesYear;
    }

    public static function monthlyStats($listInvoices)
    {

        $months = [
            1 => 'Janvier',
            2 => 'Février',
            3 => 'Mars',
            4 => 'Avril',
            5 => 'Mai',
            6 => 'Juin',
            7 => 'Juillet',
            8 => 'Août',
            9 => 'Septembre',
            10 => 'Octobre',
            11 => 'Novembre',
            12 => 'Décembre',
        ];

        $colors = [
            1 => '#eab308',
            2 => '#eab308',
            3 => '#eab308',
            4 => '#f97316',
            5 => '#f97316',
            6 => '#f97316',
            7 => '#0ea5e9',
            8 => '#0ea5e9',
            9 => '#0ea5e9',
            10 => '#10b981',
            11 => '#10b981',
            12 => '#10b981',
        ];

        $monthly = [];

        for ($i = 1; $i < 13; $i++) {
            $monthly[$i]['amount_with_vat'] = 0;
            $monthly[$i]['amount'] = 0;
            $monthly[$i]['vat'] = 0;
            $monthly[$i]['label'] = $months[$i];
            $monthly[$i]['month'] = $i;
            $monthly[$i]['color'] = $colors[$i];
            foreach ($listInvoices as $invoice) {
                if(date('n', strtotime($invoice->paid_at)) == $i){
                    if (isset($monthly[$i])) {
                        $monthly[$i]['amount_with_vat'] += $invoice->amount_with_vat;
                        $monthly[$i]['amount'] += $invoice->amount;
                        $monthly[$i]['vat'] += $invoice->vat;
                    }
                }
            }
        }
        return $monthly;
    }


    public static function trimestersStats($listInvoices)
    {
        $colors = [
            1 => '#eab308',
            2 => '#f97316',
            3 => '#0ea5e9',
            4 => '#10b981',
        ];

        $trimesters = [];

        for ($i = 1; $i < 5; $i++) {
            $trimesters[$i]['amount'] = 0;
            $trimesters[$i]['contribution'] = 0;
            $trimesters[$i]['label'] = "Trimestre ".$i;
            $trimesters[$i]['trimester'] = $i;
            $trimesters[$i]['color'] = $colors[$i];
            foreach ($listInvoices as $invoice) {
                $invoiceMonth = date('n', strtotime($invoice->paid_at));
                $invoiceTrimester = floor(($invoiceMonth - 1) / 3) + 1;
                if($invoiceTrimester == $i && $invoice->status == "payée"){
                    if (isset($trimesters[$i])) {
                        $trimesters[$i]['amount'] += $invoice->amount;
                        $trimesters[$i]['contribution'] += $invoice->amount * 23.6 / 100;
                    }
                }
            }
        }
        return $trimesters;
    }



    public static function clientsStats($listInvoices)
    {

        $clients = [];

        foreach ($listInvoices as $invoice) {
            $i = $invoice->client->id;
            if(!isset($trimesters[$i])){
                $clients[$i]['amount'] = 0;
                $clients[$i]['amount_with_vat'] = 0;
                $clients[$i]['label'] = $invoice->client->name;
            }
            $clients[$i]['amount'] += $invoice->amount;
            $clients[$i]['amount_with_vat'] += $invoice->amount_with_vat;
        }
        return $clients;
    }

    public static function totals($listInvoices)
    {
        $invoiceCollected = 0;
        $invoiceToCollected = 0;

        foreach ($listInvoices as $invoice) {
            switch ($invoice->status) {
                //case 'editions';
                case 'envoyée';
                    $invoiceToCollected += $invoice->amount;
                    break;
                case 'payée';
                    $invoiceCollected += $invoice->amount;
                    break;
            }
        }


        $totals = [
            'amount_with_vat_total' => $listInvoices->sum('amount_with_vat'),
            'amount_total' => $listInvoices->sum('amount'),
            'vat_total' => $listInvoices->sum('vat'),
            'collected' => $invoiceCollected,
            'to_collected' => $invoiceToCollected,
            'contribution' => $invoiceCollected * 23.6 / 100,
        ];

        return collect($totals);
    }

}
