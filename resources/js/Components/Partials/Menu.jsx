import NavLink from "@/Components/NavLink";

export default function Menu({ years, className, tabIndex }) {
    return (
        <ul tabIndex={ tabIndex } className={"menu " + className}>
            <li>
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Dashboard
                </NavLink>
            </li>
            <li tabIndex={0}>
                <NavLink
                    href={route("invoice.index")}
                    active={route().current("invoice.index")}
                >
                    Factures
                    <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </NavLink>
                <ul className="p-2 bg-base-100">
                    <li>
                        <NavLink
                            href={route("invoice.index_year", "2022")}
                            active={route().current("invoice.index_year")}
                        >
                            2022
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href={route("invoice.index_year", "2011")}
                            active={route().current("invoice.index_year")}
                        >
                            2021
                        </NavLink>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink
                    href={route("client.index")}
                    active={route().current("client.index")}
                >
                    Clients
                </NavLink>
            </li>
        </ul>
    );
}
