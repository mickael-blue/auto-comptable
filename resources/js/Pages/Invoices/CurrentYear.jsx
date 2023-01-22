import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MonthTable from '@/Components/Invoices/MonthTable';
import TotalTable from '@/Components/Invoices/TotalTable';
import { Head, usePage } from '@inertiajs/inertia-react';

export default function CurrentYear({ auth }) {
    const invoices = usePage().props.invoices.data;
    const months = usePage().props.months
    const totals = usePage().props.totals;
    const year = usePage().props.year;
    console.log(invoices);
    console.log(months);
    console.log(totals);
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-base leading-tight">Factures {year}</h2>}
        >
            <Head title="Factures" />

            <div className="py-5">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">

                    <MonthTable months={months}></MonthTable>
                    <TotalTable totals={totals}></TotalTable>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
