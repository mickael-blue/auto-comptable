<?php

namespace App\Models;

use App\Models\Client;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invoice extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'number',
        'title',
        'client_id',
        'with_vat',
        'status',
        'payment_mode',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function scopeByYear($query, $year)
    {
        return $query->whereBetween('created_at', [$year.'-01-01', $year.'-12-31']);
    }
}
