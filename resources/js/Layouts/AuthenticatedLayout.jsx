import ApplicationLogo from "@/Components/Partials/ApplicationLogo";
import UserButton from "@/Components/Partials/UserButton";
import Menu from "@/Components/Partials/Menu";
import Footer from "@/Components/Partials/Footer";

export default function Authenticated({ auth, header, children }) {
    const { user } = auth;
    return (
        <div className="min-h-screen bg-base-300" data-theme={user.theme}>
            <nav className="navbar bg-base-200 border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>

                        <Menu
                            tabIndex={0}
                            className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-base-content" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <Menu className="menu-horizontal px-1" />
                </div>
                <div className="navbar-end">
                    <UserButton user={user} />
                </div>
            </nav>

            {header && (
                <header className="bg-base-100 bg-neutral-content shadow">
                    <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}
