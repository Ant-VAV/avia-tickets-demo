import React from "react";
import { Layout } from "./Layout/Layout";
import { MainPage } from "./MainPage/MainPage";
import { CompaniesContextStore } from "../context/CompaniesContext.store";

function App() {
    return (
        <CompaniesContextStore>
            <Layout>
                <MainPage/>
            </Layout>
        </CompaniesContextStore>
    );
}

export default App;
