import { usePage } from "@inertiajs/inertia-react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function GraphPerMonth() {
    const months = usePage().props.months;
    console.log(months);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={months.data} layout="vertical">
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="label" type="category"  interval={0} width={85}/>
                <Tooltip />
                <Bar dataKey="amount" stackId="amount" label={{ fill: 'white', fontSize: 20 }} fill="#8884d8" />
                <Bar dataKey="vat" stackId="amount" label={{ fill: 'white', fontSize: 20 }} fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}
