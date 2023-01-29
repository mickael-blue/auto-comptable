import MonthTable from "@/Components/Invoices/MonthTable";
import TotalTable from "@/Components/Invoices/TotalTable";
import TrimesterTable from "@/Components/Invoices/TrimesterTable";
import { usePage } from "@inertiajs/inertia-react";

export default function Summary() {
    const { months, totals, trimesters } = usePage().props;
    console.log(usePage().props);
    return (
        <div className="flex">
            <MonthTable className="mx-3 w-1/3" months={months}></MonthTable>
            <TotalTable className="mx-3 w-1/3" totals={totals}></TotalTable>
            <TrimesterTable className="mx-3 w-1/3" trimesters={trimesters}></TrimesterTable>
        </div>
    );
}
