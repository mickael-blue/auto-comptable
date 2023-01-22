import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function PriceInput(
    {
        type = "text",
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
        <label className={`input-group ` + className}>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={`input input-bordered ` + className}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
            <span>EUR</span>
        </label>
    );
});
