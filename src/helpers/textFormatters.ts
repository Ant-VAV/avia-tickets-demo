import currency from "currency.js";

export const getRurCurrency = (value: number): string => currency(value, {
    symbol: "₽",
    separator: " ",
    decimal: ",",
    precision: 0,
    pattern: "# !",
}).format();

export const decliner = (number: number, words: string[]): string => {
    number = number % 100;
    const n1 = number % 10;
    if (number > 10 && number < 20) {
        return `${number} ${words[2]}`;
    }
    if (n1 > 1 && n1 < 5) {
        return `${number} ${words[1]}`;
    }
    if (n1 === 1) {
        return `${number} ${words[0]}`;
    }
    return `${number} ${words[2]}`;
};

export const pngRemover = (url: string): string => {
    return url.replace(".png", "");
};