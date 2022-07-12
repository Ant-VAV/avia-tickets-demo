import React, { ChangeEvent } from "react";
import { HiddenInput, InnerCircle, Label, StyledCheckbox, Text } from "./RadioButton.styles";

interface RadioButtonProps {
    labelText: string;
    name: string;
    checked?: boolean;
    onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function RadioButton(props: RadioButtonProps) {
    const {checked, labelText, name, onSelect} = props;

    return (
        <Label>
            <HiddenInput
                type={"radio"}
                name={name}
                value={labelText}
                onChange={onSelect}
            />
            <StyledCheckbox checked={checked}>
                <InnerCircle/>
            </StyledCheckbox>
            <Text>{labelText}</Text>
        </Label>
    );
}