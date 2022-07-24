import React, { ButtonHTMLAttributes } from "react";
import { Button, Content } from "./Moar.styles";
import { UppedRarefiedText } from "../Common/StyledText";
import { decliner } from "../../helpers/textFormatters";

interface MoarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    showCount: number;
}

export function Moar(props: MoarProps) {
    const {onClick, showCount} = props;
    return (
        <Content>
            <Button onClick={onClick}>
                <UppedRarefiedText>Показать
                    еще {decliner(showCount, ["билет", "билета", "билетов"])}</UppedRarefiedText>
            </Button>
        </Content>
    );
}