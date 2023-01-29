<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class InvoiceMonthCollection extends ResourceCollection
{

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->sortBy('month')->toArray(),
            'sum' => [
                'amount_with_vat' => [
                    'month' => round($this->collection->sum('amount_with_vat')/12),
                    'day' => round(($this->collection->sum('amount_with_vat')/12)/20)
                ],
                'amount' => [
                    'month' => round($this->collection->sum('amount')/12),
                    'day' => round(($this->collection->sum('amount')/12)/20)
                ],
                'vat' => [
                    'month' => round($this->collection->sum('vat')/12),
                    'day' => round(($this->collection->sum('vat')/12)/20)
                ]
            ]
        ];
    }
}
