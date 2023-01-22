export default function Checkbox({ name, value, handleChange }) {
    return (
        <>
        <input type="hidden" name={name} value="0"></input>
        <input
            type="checkbox"
            name={name}
            value={value}
            className="checkbox"
            onChange={(e) => handleChange(e)}
        />
        </>
    );
}
