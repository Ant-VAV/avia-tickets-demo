import React from "react";
import { ResultsContainer } from "./MainPage.styles";
import { TransferFilter } from "../TransfersFilter/TransferFilter";
import { CompaniesFilter } from "../CompaniesFilter/CompaniesFilter";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { Separator } from "../Common/Separator";
import { OfferList } from "../OfferList/OfferList";

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
                    <OfferList/>
                </section>
            </ResultsContainer>
        </>
    );
}