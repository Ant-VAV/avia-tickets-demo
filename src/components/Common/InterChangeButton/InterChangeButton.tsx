import React, { MouseEvent } from "react";
import { StyledButton } from "./InterChangeButton.styles";

interface InterChangeButtonProps {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function InterChangeButton(props: InterChangeButtonProps) {
    const {onClick} = props;
    return (
        <StyledButton onClick={onClick}>&#8646;</StyledButton>
    );
}