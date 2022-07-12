import React from "react";
import { HiddenInput, Label, StyledCheckbox } from "./Checkbox.styles";
import { ReactComponent as Icon } from "./Mark.svg";

interface CheckboxProps {
    checked?: boolean;
    labelText: string;
}

export function Checkbox(props: CheckboxProps) {
    const {checked, labelText} = props;
    return (
        <Label>
            <HiddenInput type={"checkbox"}/>
            <StyledCheckbox checked={checked}>
                <Icon/>
            </StyledCheckbox>
            {labelText}
        </Label>
    );
}