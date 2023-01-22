import { InertiaLink } from "@inertiajs/inertia-react";
import LabelDate from "@/Components/LabelDate";
import Pagination from "@/Components/Pagination";

export default function ListTable({ list }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra table-compact w-full text-base dark:base-content">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.data.map(
                        ({
                            id,
                            name,
                            created_at,
                            updated_at,
                        }) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        Créé le <LabelDate className='font-bold' date={created_at} format="dddd D MMMM YYYY à h:mm:ss" />
                                        <br/>
                                        Modifié le <LabelDate className='font-bold' date={updated_at} format="dddd D MMMM YYYY à h:mm:ss"/>
                                    </td>
                                    <td>
                                        <InertiaLink
                                            href={route("client.edit", id)}
                                            className="btn btn-sm btn-success m-1"
                                        >
                                            Edit
                                        </InertiaLink>
                                        <InertiaLink
                                            href={route("client.destroy", id)}
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
