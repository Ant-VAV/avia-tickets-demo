import React, { ReactNode } from "react";
import { Container, Header } from "./SideContainer.styles";

interface SideContainerProps {
    header: ReactNode;
    children: ReactNode;
}

export function SideContainer(props: SideContainerProps) {
    const {header, children} = props;
    return (
        <Container>
            <Header>{header}</Header>
            {children}
        </Container>
    );
}