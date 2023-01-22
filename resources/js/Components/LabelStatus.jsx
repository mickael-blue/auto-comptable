export default function LabelStatus({ label }) {
    let classCss = "badge-warning";
    switch (label) {
        case "envoyée":
            classCss = "badge-info";
            break;
        case "annulée":
            classCss = "badge-error";
            break;
        case "payée":
            classCss = "badge-success";
            break;
    }
    return (<div className={"badge  gap-2 " + classCss}>{label}</div>);
}
