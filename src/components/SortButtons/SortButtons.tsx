import React, { ChangeEvent, useState } from "react";
import { Container } from "./SortButtons.styles";
import { SquareRadioButton } from "./SquareRadioButton";

const priceSortTypes = ["Самый дешёвый", "Самый быстрый", "Оптимальный"];

export function SortButtons() {
    const [selectedItem, setSelectedItem] = useState<string>(priceSortTypes[0]);
    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedItem(value);
    };

    return (
        <Container>
            {priceSortTypes.map((value) => (
                <SquareRadioButton
                    key={value}
                    name={"priceFilter"}
                    labelText={value}
                    onSelect={handleSelectChange}
                    checked={selectedItem === value}
                />
            ))}
        </Container>
    );
}