import { Link } from "@inertiajs/inertia-react";

export default function UserButton({ user }) {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
                {user.name}
                <svg
                    className="ml-2 -mr-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            >
                <li>
                    <Link href={route("profile.edit")}>Profile</Link>
                </li>
                <li>
                    <Link href={route("logout")} method="post" as="button">
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>
    );
}
