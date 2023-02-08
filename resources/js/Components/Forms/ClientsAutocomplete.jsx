import React, { useEffect, useState } from "react";
import AutocompleteInput from "./AutocompleteInput";
//return type for restcountries.com api.
//do this for the static type checking. very important!
const ClientsAutocomplete = ({ suggestions, label, name, handleChange }) => {
    //query typed by user
    const [val, setVal] = useState('');
    //a list to show on the dropdown when user types
    const [items, setItems] = useState();

    useEffect(() => {
        //if there is no value, return the countries list.
        if (!val) {
            setItems(suggestions);
            return;
        }
        console.log(val);
        //if the val changes, we filter items so that it can be filtered. and set it as new state
        const newItems = suggestions
            .filter((p) =>
                p.label.toLowerCase().includes(val.toLowerCase())
            )
            .sort();
        setItems(newItems);
    }, [suggestions, val]);
    //use the common auto complete component here.
    return (
        <AutocompleteInput
            items={items}
            value={val}
            name={name}
            onChange={(e) => {
                setVal(e.target.value)
                handleChange
            }}
        />
    );
};
export default ClientsAutocomplete;
