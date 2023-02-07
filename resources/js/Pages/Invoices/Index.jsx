import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/inertia-react";
import TabList from "./Partials/TabList";
import Summary from "./Partials/Summary";
import Graphs from "./Partials/Graphs";

export default function Index({ auth }) {
    const [activeTab, setActiveTab] = useState("tab1");
    const { invoices, clients } = usePage().props;
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Factures" />
            <div className="py-5 mx-4 ">
                <div className="tabs ml-4">
                    <a
                        className={
                            "tab tab-lifted " +
                            (activeTab === "tab1" && "tab-active")
                        }
                        onClick={() => setActiveTab("tab1")}
                    >
                        Liste factures
                    </a>
                    <a
                        className={
                            "tab tab-lifted " +
                            (activeTab === "tab2" && "tab-active")
                        }
                        onClick={() => setActiveTab("tab2")}
                    >
                        Totals
                    </a>
                    <a
                        className={
                            "tab tab-lifted " +
                            (activeTab === "tab3" && "tab-active")
                        }
                        onClick={() => setActiveTab("tab3")}
                    >
                        Graphiques
                    </a>
                </div>
                <div className="max-w-full mx-auto sm:p-6 lg:p-4 border border-base-100 bg-base-100 rounded-md">
                    {activeTab === "tab1" && <TabList invoices={invoices} />}
                    {activeTab === "tab2" && <Summary/>}
                    {activeTab === "tab3" && <Graphs invoices={invoices} clients={clients}/>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
