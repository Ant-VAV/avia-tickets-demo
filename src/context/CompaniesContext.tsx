import { createContext } from "react";
import { Company } from "../typings/server";

interface CompaniesContextProps {
    companies?: Company[];
}

const defaultParams: CompaniesContextProps = {};

export const CompaniesContext = createContext<CompaniesContextProps>(defaultParams);