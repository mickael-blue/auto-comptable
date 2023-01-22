import LabelPrice from "@/Components/LabelPrice";

export default function MonthTable({ months }) {
    return (
        <div className="overflow-x-auto mb-2">
            <table className="table table-zebra table-compact w-full bordered">
                <thead>
                    <tr>
                        <th>Mois</th>
                        <th className="text-right">Montant TTC</th>
                        <th className="text-right">Montant HT</th>
                        <th className="text-right">TVA</th>
                    </tr>
                </thead>
                <tbody>
                    {months.data.map(
                        ({ label, amount, amount_with_vat, vat }) => {
                            return (
                                <tr key={label}>
                                    <td>{label}</td>
                                    <td className="text-right"><LabelPrice>{amount_with_vat}</LabelPrice></td>
                                    <td className="text-right"><LabelPrice>{amount}</LabelPrice></td>
                                    <td className="text-right"><LabelPrice>{vat}</LabelPrice></td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Month sum</td>
                        <td className="text-right"><LabelPrice>{months.sum.amount_with_vat.month}</LabelPrice></td>
                        <td className="text-right"><LabelPrice>{months.sum.amount.month}</LabelPrice></td>
                        <td className="text-right"><LabelPrice>{months.sum.vat.month}</LabelPrice></td>
                    </tr>
                    <tr>
                        <td>Day sum</td>
                        <td className="text-right"><LabelPrice>{months.sum.amount_with_vat.day}</LabelPrice></td>
                        <td className="text-right"><LabelPrice>{months.sum.amount.day}</LabelPrice></td>
                        <td className="text-right"><LabelPrice>{months.sum.vat.day}</LabelPrice></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
