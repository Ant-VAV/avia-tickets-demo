import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onValueChange: (value: string) => void;
}

export function Input(props: InputProps) {
    const {type, placeholder, value, onValueChange} = props;
    return (
        <StyledInput type={type}
                     placeholder={placeholder}
                     value={value}
                     onChange={e => onValueChange(e.target.value)}/>
    );
}