import React, { ChangeEvent } from "react";
import { HiddenInput, Label, StyledCheckbox } from "./Checkbox.styles";
import { ReactComponent as Icon } from "./Mark.svg";

interface CheckboxProps {
    labelText: string;
    checked?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(props: CheckboxProps) {
    const {checked, labelText, onChange} = props;
    return (
        <Label>
            <HiddenInput value={labelText} type={"checkbox"} onChange={onChange}/>
            <StyledCheckbox checked={checked}>
                <Icon/>
            </StyledCheckbox>
            {labelText}
        </Label>
    );
}