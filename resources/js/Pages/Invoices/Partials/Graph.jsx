import { usePage } from "@inertiajs/inertia-react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function Graph() {
    const months = usePage().props.months;
    console.log(months);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={months.data}>
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}
