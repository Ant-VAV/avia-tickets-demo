import React, { ButtonHTMLAttributes } from "react";
import { Button, Content } from "./Moar.styles";
import { UppedRarefiedText } from "../Common/StyledText";

interface MoarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    showCount: number;
}

export function Moar(props: MoarProps) {
    const {onClick, showCount} = props;
    return (
        <Content>
            <Button onClick={onClick}>
                <UppedRarefiedText>Показать еще {showCount} билетов</UppedRarefiedText>
            </Button>
        </Content>
    );
}