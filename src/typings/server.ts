export interface Ticket {
    id: string;
    price: number;
    companyId: string;
    info: {
        origin: CityCodes;
        destination: CityCodes;
        dateStart: string;
        dateEnd: string;
        stops: CityCodes[];
        duration: number;
    };
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
type CityCodes = "MOW" | "HKT" | "HKG" | "JNB" | "PTB" | "ARH" | "TRN" | "KRS" | "SRT" | "LOS" | "EKV" | "EKT";

export interface Company {
    id: string;
    name: string;
    // Имя логотипа
    // Т.к. картинки пока храниться будут у Вас локально - имя и путь к картинке можете замапить на те что будут у вас
    logo: string;
}
