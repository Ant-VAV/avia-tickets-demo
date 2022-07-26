import React from "react";
import { Container, SecondLine } from "./InfoBlock.styles";
import { GrayText, UppedRarefiedText } from "../../Common/StyledText";

interface InfoBlockProps {
    firstLine?: string;
    secondLine?: string;
}

export function InfoBlock(props: InfoBlockProps) {
    const {firstLine, secondLine} = props;
    return (
        <Container>
            {firstLine && <UppedRarefiedText><GrayText>{firstLine}</GrayText></UppedRarefiedText>}
            {secondLine && <SecondLine>{secondLine}</SecondLine>}
        </Container>
    );
}