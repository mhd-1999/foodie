import { useState } from "react";

function FormInput(props) {
    const { onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true)
    }
    return <div className={props.className}>
        <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()} />
    </div>;
}

export default FormInput;