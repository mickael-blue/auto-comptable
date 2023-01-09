import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';

export default function CurrentYear({ auth }) {
    const invoices = usePage().props.invoices.data;
    const months = usePage().props.months;
    const year = usePage().props.year;
    console.log(invoices);
    console.log(months);
    console.log(year);
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Factures {year}</h2>}
        >
            <Head title="Factures" />

            <div className="py-5">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">


                <table className="mt-5 rounded-lg bg-white table-auto w-full border-collapse border border-grey-300">
                        <thead className="bg-slate-50 dark:bg-slate-700 rounded-t-lg ">
                            <tr>
                                <th className="border-b px-6 py-4 slate-900 dark:text-slate-200">
                                    Mois
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Montant
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {months.map(({ label, amount }) => {
                            return (
                            <tr key={label}>
                                <td className="w-1/12 border-b text-center px-6 py-4">{label}</td>
                                <td className="border-b text-left px-6 py-4">{amount}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
