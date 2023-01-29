import GraphPerMonth from "@/Components/Invoices/GraphPerMonth";
import GraphPerClient from "@/Components/Invoices/GraphPerClient";

export default function Graphs({invoices}) {
    return (
        <div className="columns-2">
            <GraphPerMonth/>
            <GraphPerClient/>
        </div>
    )
}
