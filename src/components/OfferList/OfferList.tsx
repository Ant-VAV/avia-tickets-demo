import React, { useContext } from "react";
import { Offer } from "../Offer/Offer";
import { Moar } from "../Moar/Moar";
import { TicketsContext } from "../../context/TicketsContext";
import { SortButtons } from "../SortButtons/SortButtons";

export function OfferList() {
    const {tickets} = useContext(TicketsContext);

    return (
        <>
            {tickets &&
                <>
                    <SortButtons/>
                    {tickets.map(ticket => <Offer key={ticket.id} ticket={ticket}/>)}
                    <Moar/>
                </>
            }
        </>
    );
}