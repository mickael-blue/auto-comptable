import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, InertiaLink, usePage } from '@inertiajs/inertia-react';

export default function Index({ auth }) {
    const invoices = usePage().props.invoices.data;
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Factures</h2>}
        >
            <Head title="Factures" />

            <div className="py-5">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <InertiaLink
                        href={route("invoice.create")}
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Ajouter une facture
                    </InertiaLink>
                    <table className="mt-5 rounded-lg bg-white table-auto w-full border-collapse border border-grey-300">
                        <thead className="bg-slate-50 dark:bg-slate-700 rounded-t-lg ">
                            <tr>
                                <th className="border-b px-6 py-4 slate-900 dark:text-slate-200">
                                    #
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Date d'édition
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Client
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Titre
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Montant HT
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Montant TTC
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    TVA
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Envoyé
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Règlement Reçu
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Type de règlement
                                </th>
                                <th className="border-b text-left px-6 py-4 slate-900 dark:text-slate-200">
                                    Date de règlement
                                </th>
                                <th className="border-b text-center px-6 py-4 slate-900 dark:text-slate-200">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {invoices.map(({ id, number, title, client, amount, amount_with_vat, vat, edited_at, paid_at, with_vat, sent, payment_received, payment_mode }) => {
                            return (
                            <tr key={id}>
                                <td className="w-1/12 border-b text-center px-6 py-4">{number}</td>
                                <td className="border-b text-left px-6 py-4">{edited_at}</td>
                                <td className="w-3/12 border-b text-left px-6 py-4">{client.name}</td>
                                <td className="w-4/12 border-b text-left px-6 py-4">{title}</td>
                                <td className="w-2/12 border-b text-right px-6 py-4">{amount} €</td>
                                <td className="w-2/12 border-b text-right px-6 py-4">{amount_with_vat} €</td>
                                <td className="w-2/12 border-b text-right px-6 py-4">{vat} €</td>
                                <td className={"w-2/12 border-b text-center px-6 py-4 "+(sent?'bg-green-200':'bg-red-200')}>{sent?'oui':'non'}</td>
                                <td className={"w-2/12 border-b text-center px-6 py-4 "+(payment_received?'bg-green-200':'bg-red-200')}>{payment_received?'oui':'non'}</td>
                                <td className="w-2/12 border-b text-left px-6 py-4">{payment_mode}</td>
                                <td className="w-2/12 border-b text-left px-6 py-4">{paid_at}</td>
                                <td className="w-2/12 border-b text-center px-6 py-4">
                                    <InertiaLink
                                        href={route(
                                            "invoice.edit",
                                            id
                                        )}
                                        className="mx-1 bg-orange-200 font-bold py-2 px-4 rounded-lg  focus:text-indigo-700 focus:outline-none"
                                    >
                                        Edit
                                    </InertiaLink>
                                    <InertiaLink
                                        href={route(
                                            "invoice.destroy",
                                            id
                                        )}
                                        className="mx-1 bg-red-200 font-bold py-2 px-4 rounded-lg  focus:text-indigo-700 focus:outline-none"
                                    >
                                        Remove
                                    </InertiaLink>
                                </td>
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
