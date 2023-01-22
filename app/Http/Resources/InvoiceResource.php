<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'client' => $this->client,
            'status' => $this->status,
            'paid_at' => $this->paid_at,
            'with_vat' => $this->with_vat,
            'title' => $this->title,
            'amount' => $this->amount,
            'amount_with_vat' => $this->amount_with_vat,
            'vat' => $this->vat,
            'payment_mode' => $this->payment_mode,
        ];
    }
}
