import currency from "currency.js";

export const getRurCurrency = (value: string): string => currency(value, {
    symbol: "₽",
    separator: " ",
    decimal: ",",
    precision: 0,
    pattern: "# !",
}).format().toString();