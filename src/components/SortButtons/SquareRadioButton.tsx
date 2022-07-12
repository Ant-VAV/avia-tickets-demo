import React, { ChangeEvent } from "react";
import { HiddenInput, Label, Text } from "./SquareRadioButton.styles";

interface SquareRadioButtonProps {
    labelText: string;
    name: string;
    checked?: boolean;
    onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SquareRadioButton(props: SquareRadioButtonProps) {
    const {checked, labelText, name, onSelect} = props;

    return (
        <Label checked={checked}>
            <HiddenInput
                type={"radio"}
                name={name}
                value={labelText}
                onChange={onSelect}
            />
            <Text>{labelText}</Text>
        </Label>
    );
}