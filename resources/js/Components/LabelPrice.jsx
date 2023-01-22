export default function LabelPrice({
    lang = "fr-FR",
    style = "currency",
    currency = "EUR",
    className = "",
    children,
}) {
    const formatted = Intl.NumberFormat(lang, {
        style,
        currency,
    });
    return children ? (
        <span className={className}>{formatted.format(children)}</span>
    ) : null;
}
