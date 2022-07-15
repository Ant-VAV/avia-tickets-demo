import React from "react";
import { Layout } from "./Layout/Layout";
import { MainPage } from "./MainPage/MainPage";
import { CompaniesContextStore } from "../context/CompaniesContext.store";
import { TicketsContextStore } from "../context/TicketsContext.store";

function App() {
    return (
        <CompaniesContextStore>
            <TicketsContextStore>
                <Layout>
                    <MainPage/>
                </Layout>
            </TicketsContextStore>
        </CompaniesContextStore>
    );
}

export default App;
