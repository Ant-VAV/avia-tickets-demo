import React, { ChangeEvent, useState } from "react";
import { Checkbox } from "../Common/Checkbox/Checkbox";
import { SideContainer } from "../Common/SideContainer/SideContainer";

interface TransferFilterProps {
}

const checkboxContent = ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];

export function TransferFilter(props: TransferFilterProps) {
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        let newItems: Set<string>;
        if (isChecked) {
            selectedItems.add(value);
        } else {
            selectedItems.delete(value);
        }
        newItems = new Set(selectedItems);
        setSelectedItems(newItems);
    };

    return (
        <SideContainer header={"Количество пересадок"}>
            {checkboxContent.map(value => (
                <Checkbox key={value} labelText={value} checked={selectedItems.has(value)} onChange={handleChange}/>))}
        </SideContainer>
    );
}