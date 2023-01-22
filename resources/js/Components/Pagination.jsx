import { Link } from "@inertiajs/inertia-react";

export default function Pagination({ links, meta }) {
    console.log(links);
    console.log(meta);
    return meta ? (
        <div className="mt-5 flex justify-center">
            <div className="btn-group">
                {meta.links.map((link, key) => (
                    <Link
                        key={key}
                        href={link.url}
                        className={
                            "btn " +
                            (link.url === null ? "btn-disabled " : "") +
                            (link.active ? "btn-active " : "")
                        }
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                ))}
            </div>
        </div>
    ) : (
        ""
    );
}
