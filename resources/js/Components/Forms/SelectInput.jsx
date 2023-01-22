import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    {
        options,
        name,
        id,
        value,
        className,
        autoComplete,
        required,
        isFocused,
        handleChange,
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            name={name}
            id={id}
            className={"select select-bordered " + className}
            value={value}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
        >
            {options.map(({ key, label }) => {
                return (
                    <option key={key} value={key}>
                        {label}
                    </option>
                );
            })}
        </select>
    );
});
