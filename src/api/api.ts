import axios, { AxiosInstance } from "axios";
import { Company, Ticket } from "../typings/server";
import { sleep } from "../helpers/sleep";

export const apiInstance: AxiosInstance = axios.create({
    baseURL: "https://api.npoint.io",
    timeout: 5000,
});

export const getCompanies = async () => {
    const {data} = await apiInstance.get<Company[]>(`/a1b1c28b32d9785bb26c`);
    await sleep(2000); //эмуляция задержки от сервера
    return data;
};

export const getTickets = async () => {
    const {data} = await apiInstance.get<Ticket[]>(`/163b5e66df9f2741243e`);
    await sleep(2000); //эмуляция задержки от сервера
    return data;
};