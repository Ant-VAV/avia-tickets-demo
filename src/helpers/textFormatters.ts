export const getRurCurrency = (value: string): string => {
    return new Intl.NumberFormat("ru-RU").format(Number(value));
};