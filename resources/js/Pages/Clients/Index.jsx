import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import ListTable from "@/Components/Clients/ListTable";

export default function Index({ auth }) {
    const {clients} = usePage().props;
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Clients" />

            <div className="py-5">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <InertiaLink
                        href={route("client.create")}
                        className="btn mb-4"
                    >
                        Ajouter un client
                    </InertiaLink>
                    <ListTable list={clients} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
