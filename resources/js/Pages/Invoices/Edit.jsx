import React from "react";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import InputError from "@/Components/Forms/InputError";
import InputLabel from "@/Components/Forms/InputLabel";
import SelectInput from "@/Components/Forms/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Forms/TextInput";
import PriceInput from "@/Components/Forms/PriceInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LabelPrice from "@/Components/LabelPrice";
import LabelStatus from "@/Components/LabelStatus";
import Checkbox from "@/Components/Forms/Checkbox";

export default function Edit(props) {
    const invoice = usePage().props.invoice.data;
    const clientsOption = usePage().props.clients.data.map(({ id, name }) => {
        return {
            key: id,
            label: name,
        };
    });

    const { data, setData, put, processing, errors, reset } = useForm({
        number: invoice.number,
        title: invoice.title,
        client_id: invoice.client.id,
        amount: invoice.amount,
        status: invoice.status,
        with_vat: invoice.with_vat,
    });

    const onHandleChange = (event) => {

        console.log(data);
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        console.log(data);

        put(route("invoice.update", invoice.id));
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-neutral leading-tight">
                    Facture {data.number} -{" "}
                    <LabelPrice>{data.amount}</LabelPrice>{" "}
                    <LabelStatus label={data.status}>{data.status}</LabelStatus>
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-base-200 overflow-hidden shadow-sm sm:rounded-lg p-5">
                        <form onSubmit={submit}>
                            <div className="form-control">
                                <InputLabel
                                    forInput="number"
                                    value="Numéro de facture"
                                />

                                <TextInput
                                    id="number"
                                    name="number"
                                    value={data.number}
                                    className="w-full max-w-xs"
                                    autoComplete="number"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError
                                    message={errors.number}
                                    className="mt-2"
                                />
                            </div>
                            <div className="form-control">
                                <InputLabel forInput="title" value="Titre" />

                                <TextInput
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    className="w-full max-w-xs"
                                    autoComplete="title"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>

                            <div className="form-control">
                                <InputLabel for="client" value="Client" />

                                <SelectInput
                                    id="client"
                                    value={data.client_id}
                                    className="w-full max-w-xs"
                                    options={clientsOption}
                                    handleChange={(e) =>
                                        setData("client_id", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.client_id}
                                />
                            </div>

                            <div className="form-control">
                                <InputLabel for="status" value="Statut" />

                                <SelectInput
                                    id="status"
                                    value={data.status}
                                    className="w-full max-w-xs"
                                    options={[
                                        { key: "édition", label: "Edition" },
                                        { key: "envoyée", label: "Envoyée" },
                                        { key: "annulée", label: "Annulée" },
                                        { key: "payée", label: "Payée" },
                                    ]}
                                    handleChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>

                            <div className="form-control">
                                <InputLabel forInput="amount" value="Prix" />

                                <PriceInput
                                    id="amount"
                                    name="amount"
                                    value={data.amount}
                                    className="w-full max-w-xs"
                                    autoComplete="amount"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.amount}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        Avec TVA
                                    </span>
                                    <Checkbox
                                        type="checkbox"
                                        name="with_vat"
                                        id="with_vat"
                                        defaultChecked={true}
                                        value={data.with_vat}
                                        handleChange={onHandleChange}
                                        className="checkbox"
                                    />
                                </label>
                                <InputError
                                    className="mt-2"
                                    message={errors.with_vat}
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    processing={processing}
                                >
                                    Sauvegarder
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
