import { usePage } from "@inertiajs/inertia-react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function GraphPerClient() {
    const clients = usePage().props.clients;
    console.log(clients);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie data={clients.data} nameKey="label" dataKey="amount" label fill="#8884d8" />
            </PieChart>
        </ResponsiveContainer>
    );
}
