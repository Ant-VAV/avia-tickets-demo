import { createContext } from "react";
import { Ticket } from "../typings/server";

interface TicketsContextProps {
    tickets?: Ticket[];
}

const defaultParams: TicketsContextProps = {};

export const TicketsContext = createContext<TicketsContextProps>(defaultParams);