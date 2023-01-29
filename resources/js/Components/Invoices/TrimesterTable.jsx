import LabelPrice from "@/Components/LabelPrice";

export default function TrimesterTable({ trimesters, className }) {
    console.log(trimesters);
    return (
        <div className={"overflow-x-auto " + className}>
            <table className="table table-compact w-full bordered">
                <thead>
                    <tr>
                        <th>Trimestre</th>
                        <th className="text-right">Montant HT</th>
                        <th className="text-right">Cotisations</th>
                    </tr>
                </thead>
                <tbody>
                    {trimesters.data.map(
                        ({ label, amount, contribution, color }) => {
                            return (
                                <tr key={label} className={'bg-['+color+']'}>
                                    <td className={'!bg-['+color+']'}>{label}</td>
                                    <td className={'!bg-['+color+'] text-right'}><LabelPrice>{amount}</LabelPrice></td>
                                    <td className={'!bg-['+color+'] text-right'}><LabelPrice>{contribution}</LabelPrice></td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
}
