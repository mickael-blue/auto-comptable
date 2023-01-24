import MonthTable from '@/Components/Invoices/MonthTable';
import TotalTable from '@/Components/Invoices/TotalTable';
import { usePage } from '@inertiajs/inertia-react';

export default function Summary() {
    const months = usePage().props.months;
    const totals = usePage().props.totals;
    return (
        <>
            <MonthTable months={months}></MonthTable>
            <TotalTable totals={totals}></TotalTable>
        </>
    );
}
