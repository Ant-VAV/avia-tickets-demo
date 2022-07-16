import React, { useContext, useEffect, useState } from "react";
import { Offer } from "../Offer/Offer";
import { Moar } from "../Moar/Moar";
import { TicketsContext } from "../../context/TicketsContext";
import { SortButtons } from "../SortButtons/SortButtons";
import { OfferLoader } from "../Offer/OfferLoader";
import { Ticket } from "../../typings/server";

const OFFSET_LIMIT = 5;

export function OfferList() {
    const {tickets} = useContext(TicketsContext);
    const [countToShow, setCountToShow] = useState(OFFSET_LIMIT);
    const [ticketsOffset, setTicketsOffset] = useState(countToShow);
    const [ticketsToShow, setTicketsToShow] = useState<Ticket[]>();

    useEffect(() => {
        if (tickets) {
            const newTickets = tickets.slice(0, ticketsOffset);
            setTicketsToShow(newTickets);
            setCountToShow(tickets.length - newTickets.length >= OFFSET_LIMIT ? OFFSET_LIMIT : tickets.length - newTickets.length);

        }
    }, [tickets, ticketsOffset]);

    return (
        <>
            {ticketsToShow ?
                <>
                    <SortButtons/>
                    {ticketsToShow.slice(0, ticketsOffset).map(ticket => <Offer key={ticket.id} ticket={ticket}/>)}
                    {!!countToShow &&
                        <Moar showCount={countToShow}
                              onClick={() => setTicketsOffset(prevState => prevState + countToShow)}/>}
                </>
                : <OfferLoader/>
            }
        </>
    );
}