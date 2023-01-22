<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InvoiceUpdateRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'number' => ['required'],
            'title' => ['required'],
            'client_id' => ['required'],
            'status' => ['required'],
            'amount' => ['required'],
            'with_vat' => ['boolean'],
            'payment_type',
        ];
    }
}
