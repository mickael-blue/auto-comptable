<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class InvoiceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id',
            'number',
            'client',
            'edited_at',
            'paid_at',
            'with_vat',
            'sent',
            'payment_received',
            'title',
            'amount',
            'amount_with_vat',
            'vat',
            'payment_mode',
        );
    }
}
