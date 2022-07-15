import React, { ChangeEvent, useContext, useState } from "react";
import { SideContainer } from "../Common/SideContainer/SideContainer";
import { RadioButton } from "../Common/RadioButton/RadioButton";
import { CompaniesContext } from "../../context/CompaniesContext";
import { RadioButtonLoader } from "../Common/RadioButton/RadioButtonLoader";

const ALL_COMPANIES = "Все";

export function CompaniesFilter() {
    const [selectedItem, setSelectedItem] = useState<string>(ALL_COMPANIES);
    const {companies} = useContext(CompaniesContext);

    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedItem(value);
    };

    return (
        <SideContainer header={"Компания"}>
            {companies ? <>
                <RadioButton
                    key={"allCompanies"}
                    labelText={ALL_COMPANIES}
                    name={"companySelect"}
                    onSelect={handleSelectChange}
                    checked={selectedItem === ALL_COMPANIES}/>
                {companies.map((company) => (
                        <RadioButton
                            key={company.id}
                            labelText={company.name}
                            name={"companySelect"}
                            onSelect={handleSelectChange}
                            checked={selectedItem === company.name}/>
                    ),
                )}
            </> : <RadioButtonLoader/>}

        </SideContainer>
    );
}