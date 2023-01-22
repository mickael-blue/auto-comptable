import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import ListTable from "@/Components/Invoices/ListTable";

export default function Index({ auth }) {
    const {invoices} = usePage().props;
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Factures" />

            <div className="py-5">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <InertiaLink
                        href={route("invoice.create")}
                        className="btn mb-4"
                    >
                        Ajouter une facture
                    </InertiaLink>
                    <ListTable list={invoices} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
