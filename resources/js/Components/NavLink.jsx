import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <a
            href={href}
            className={'btn btn-ghost normal-case text-s ' + (active?"bg-base-100": '')}
        >
            {children}
        </a>
    );
}
