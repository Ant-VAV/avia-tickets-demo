import React from "react";
import { AirCompanyLogo, Container, Price, Row } from "./Offer.styles";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { getRurCurrency } from "../../helpers/textFormatters";

interface OfferProps {
}

export function Offer(props: OfferProps) {
    return (
        <Container>
            <Row>
                <Price>{getRurCurrency("13000")}</Price>
                <AirCompanyLogo/>
            </Row>
            <Row>
                <InfoBlock firstLine={"Mow – Hkt"} secondLine={"10:45 – 08:00"}/>
                <InfoBlock firstLine={"В пути"} secondLine={"21ч 15м"}/>
                <InfoBlock firstLine={"2 пересадки"} secondLine={"HKG, JNB"}/>
            </Row>
        </Container>
    );
}