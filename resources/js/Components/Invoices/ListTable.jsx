import { InertiaLink } from "@inertiajs/inertia-react";
import LabelPrice from "@/Components/LabelPrice";
import LabelStatus from "@/Components/LabelStatus";
import Pagination from "@/Components/Pagination";

export default function ListTable({ list }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra table-compact w-full text-base dark:base-content">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Titre</th>
                        <th className="text-center">Montant HT</th>
                        <th className="text-center">Montant TTC</th>
                        <th className="text-center">TVA</th>
                        <th className="text-center">Statut</th>
                        <th className="text-center">Type de règlement</th>
                        <th className="text-center">Date de règlement</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.data.map(
                        ({
                            id,
                            number,
                            status,
                            title,
                            client,
                            amount,
                            amount_with_vat,
                            vat,
                            paid_at,
                            with_vat,
                            payment_mode,
                        }) => {
                            return (
                                <tr key={id}>
                                    <td>{number}</td>
                                    <td>{client.name}</td>
                                    <td>{title}</td>
                                    <td className="text-right">
                                        <LabelPrice>{amount}</LabelPrice>
                                    </td>
                                    <td className="text-right">
                                        { with_vat ? <LabelPrice>{amount_with_vat}</LabelPrice> : '' }
                                    </td>
                                    <td className="text-right">
                                        { with_vat ? <LabelPrice>{vat}</LabelPrice> : '' }
                                    </td>
                                    <td className="text-center">
                                        <LabelStatus label={status} />
                                    </td>
                                    <td className="text-center">
                                        <span className="badge">
                                            {payment_mode}
                                        </span>
                                    </td>
                                    <td className="text-center">{paid_at}</td>
                                    <td>
                                        <InertiaLink
                                            href={route("invoice.edit", id)}
                                            className="btn btn-sm btn-success m-1"
                                        >
                                            Edit
                                        </InertiaLink>
                                        <InertiaLink
                                            href={route("invoice.destroy", id)}
                                            className="btn btn-sm btn-error m-1"
                                        >
                                            Remove
                                        </InertiaLink>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
            <Pagination links={list.links} meta={list.meta} />
        </div>
    );
}
