import React from "react";
import { ResultsContainer } from "./MainPage.styles";
import { Offer } from "../Offer/Offer";
import { TransferFilter } from "../TransfersFilter/TransferFilter";
import { CompaniesFilter } from "../CompaniesFilter/CompaniesFilter";
import { SortButtons } from "../SortButtons/SortButtons";
import { Moar } from "../Moar/Moar";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { Separator } from "../Common/Separator";

export function MainPage() {
    return (
        <>
            <SearchBlock/>
            <Separator/>
            <ResultsContainer>
                <section>
                    <TransferFilter/>
                    <CompaniesFilter/>
                </section>
                <section>
                    <SortButtons/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Offer/>
                    <Moar/>
                </section>
            </ResultsContainer>
        </>
    );
}