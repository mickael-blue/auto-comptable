export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`label` + className}>
            <span className="label-text">{value ? value : children}</span>
        </label>
    );
}
