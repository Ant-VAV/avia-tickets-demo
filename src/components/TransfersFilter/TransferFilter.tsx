import React from "react";
import { Checkbox } from "../Common/Checkbox/Checkbox";
import { SideContainer } from "../Common/SideContainer/SideContainer";

interface TransferFilterProps {
}

export function TransferFilter(props: TransferFilterProps) {
    return (
        <SideContainer header={"Количество пересадок"}>
            <Checkbox labelText={"Без пересадок"} checked/>
            <Checkbox labelText={"1 пересадка"} checked/>
            <Checkbox labelText={"2 пересадки"} checked/>
            <Checkbox labelText={"3 пересадки"}/>
        </SideContainer>
    );
}