import React from "react";
import { CommonContainer } from "../Common/CommonContainer";
import { Button, Content } from "./Moar.styles";
import { UppedRarefiedText } from "../Common/StyledText";

interface MoarProps {
}

export function Moar(props: MoarProps) {
    return (
        <Content>
            <Button>
                <UppedRarefiedText>Показать еще 5 билетов</UppedRarefiedText>
            </Button>
        </Content>
    );
}