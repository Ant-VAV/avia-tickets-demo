import React, { useContext, useMemo } from "react";
import { AirCompanyLogo, Container, Price, Row } from "./Offer.styles";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { decliner, getRurCurrency } from "../../helpers/textFormatters";
import { Ticket } from "../../typings/server";
import { getDuration, getHours } from "../../helpers/dateHelpers";
import { CompaniesContext } from "../../context/CompaniesContext";

interface OfferProps {
    ticket: Ticket;
}

export function Offer(props: OfferProps) {
    const {ticket} = props;
    const {price, info: {origin, destination, stops, dateStart, dateEnd, duration}, companyId} = ticket;
    const {companies} = useContext(CompaniesContext);
    const companyLogo = useMemo(() => companies?.find(company => company.id === companyId)?.logo,
        [companies, companyId]);

    return (
        <Container>
            <Row>
                <Price>{getRurCurrency(price)} ₽</Price>
                {companyLogo && <AirCompanyLogo companyLogo={companyLogo}/>}
            </Row>
            <Row>
                <InfoBlock firstLine={`${origin} – ${destination}`}
                           secondLine={`${getHours(dateStart)} – ${getHours(dateEnd)}`}/>
                <InfoBlock firstLine={"В пути"} secondLine={getDuration(duration)}/>
                {stops.length ?
                    <InfoBlock firstLine={decliner(stops.length, ["пересадка", "пересадки", "пересадок"])}
                               secondLine={stops.join(", ")}/>
                    : <InfoBlock firstLine={"Без пересадок"}/>
                }
            </Row>
        </Container>
    );
}

