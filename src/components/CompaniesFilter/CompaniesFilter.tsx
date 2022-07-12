import React, { ChangeEvent, useState } from "react";
import { SideContainer } from "../Common/SideContainer/SideContainer";
import { RadioButton } from "../Common/RadioButton/RadioButton";

interface CompaniesFilterProps {
}

const companies = ["Все", "S7 Airlines", "XiamenAir"];

export function CompaniesFilter(props: CompaniesFilterProps) {
    const [selectedItem, setSelectedItem] = useState<string>(companies[0]);
    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedItem(value);
    };

    return (
        <SideContainer header={"Компания"}>
            {companies.map((value) => (
                    <RadioButton
                        key={value}
                        labelText={value}
                        name={"companySelect"}
                        onSelect={handleSelectChange}
                        checked={selectedItem === value}/>
                ),
            )}

        </SideContainer>
    );
}