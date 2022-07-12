import React from 'react';
import { ReactComponent as LogoIcon } from "../Resources/Logo.svg";
import { LogoHeader } from "./Header.styles";

export function Header() {
    return (
        <LogoHeader><LogoIcon/></LogoHeader>
    );
}