import ListTable from "@/Components/Invoices/ListTable";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function TabList({ invoices }) {
    return (
        <>
            <InertiaLink href={route("invoice.create")} className="btn mb-4">
                Ajouter une facture
            </InertiaLink>
            <ListTable list={invoices} />
        </>
    );
}
