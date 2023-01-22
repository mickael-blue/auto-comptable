import LabelPrice from "@/Components/LabelPrice";

export default function TotalTable({ totals }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra table-compact w-full">
                <tbody>
                    <tr>
                        <td>CA Brut (prévisionnel)</td>
                        <td className="text-right"><LabelPrice>{totals.amount_total}</LabelPrice></td>
                    </tr>
                    <tr>
                        <td>CA Brut (Encaissé)</td>
                        <td className="text-right"><LabelPrice>{totals.cached}</LabelPrice></td>
                    </tr>
                    <tr>
                        <td>TVA</td>
                        <td className="text-right"><LabelPrice>{totals.vat_total}</LabelPrice></td>
                    </tr>
                    <tr>
                        <td>À encaisser</td>
                        <td className="text-right"><LabelPrice>{totals.to_cached}</LabelPrice></td>
                    </tr>
                    <tr>
                        <td>Cotisations</td>
                        <td className="text-right"><LabelPrice>{totals.contribution}</LabelPrice></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
