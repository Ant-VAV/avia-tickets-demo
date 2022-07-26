import React, { createRef, InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styles";

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onValueChange: (value: string) => void;
}

export function DateInput(props: DateInputProps) {
    const {placeholder, value, onValueChange} = props;
    const ref = createRef<HTMLInputElement>();

    const handleChangeType = (type: "date" | "text") => {
        if (ref.current) {
            ref.current.type = type;
        }
    };

    return (
        <StyledInput type={"text"}
                     placeholder={placeholder}
                     value={value}
                     ref={ref}
                     onChange={e => onValueChange(e.target.value)}
                     onFocus={() => handleChangeType("date")}
                     onBlur={() => handleChangeType("text")}/>
    );
}