import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { CompaniesContext } from "./CompaniesContext";
import { Company } from "../typings/server";
import { getCompanies } from "../api/api";

interface CompaniesContextStoreProps {
    children: ReactElement;
}

export function CompaniesContextStore({children}: CompaniesContextStoreProps) {
    const [companies, setCompanies] = useState<Company[]>();

    const fetchData = useCallback(async () => {
        try {
            const companies = await getCompanies();
            setCompanies(companies);
        } catch {
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <CompaniesContext.Provider value={{companies}}>
            {children}
        </CompaniesContext.Provider>
    );
}