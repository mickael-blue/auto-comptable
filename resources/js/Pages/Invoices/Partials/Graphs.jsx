import GraphPerMonth from "@/Components/Invoices/GraphPerMonth";
import GraphPerClient from "@/Components/Invoices/GraphPerClient";

export default function Graphs({invoices, clients}) {
    return (
        <div className="columns-2">
            <GraphPerMonth invoices={invoices}/>
            <GraphPerClient clients={clients}/>
        </div>
    )
}
