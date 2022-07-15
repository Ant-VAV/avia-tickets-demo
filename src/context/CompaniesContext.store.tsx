import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { CompaniesContext } from "./CompaniesContext";
import { Company } from "../typings/server";
import { getCompanies } from "../api/api";

interface CompaniesContextStoreProps {
    children: ReactElement;
}

export function CompaniesContextStore({children}: CompaniesContextStoreProps) {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [companies, setCompanies] = useState<Company[]>();

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const companies = await getCompanies();
            setCompanies(companies);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <CompaniesContext.Provider value={{companies, isLoading}}>
            {children}
        </CompaniesContext.Provider>
    );
}