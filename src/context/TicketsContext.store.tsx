import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Ticket } from "../typings/server";
import { getTickets } from "../api/api";
import { TicketsContext } from "./TicketsContext";

interface TicketsContextStoreProps {
    children: ReactElement;
}

export function TicketsContextStore({children}: TicketsContextStoreProps) {
    const [tickets, setTickets] = useState<Ticket[]>();

    const fetchData = useCallback(async () => {
        try {
            const tickets = await getTickets();
            setTickets(tickets);
        } catch {
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <TicketsContext.Provider value={{tickets}}>
            {children}
        </TicketsContext.Provider>
    );
}