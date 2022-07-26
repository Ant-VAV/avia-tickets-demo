import React, { ReactElement } from "react";
import { Content } from "./Layout.styles";
import { Header } from "./Header/Header";


interface LayoutProps {
    children: ReactElement;
}

export function Layout(props: LayoutProps) {
    const {children} = props;
    return (
        <Content>
            <Header/>
            {children}
        </Content>
    );
}