import React from "react";
import { Container } from "./SearchBlock.styles";
import { Offer } from "../Offer/Offer";
import { TransferFilter } from "../TransfersFilter/TransferFilter";
import { CompaniesFilter } from "../CompaniesFilter/CompaniesFilter";
import { SortButtons } from "../SortButtons/SortButtons";
import { Moar } from "../Moar/Moar";

export function SearchBlock() {
    return (
        <Container>
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
        </Container>
    );
}