import React, { MouseEvent, useState } from "react";
import { Input } from "../Common/Input/Input";
import { Container } from "./SearchBlock.styles";
import { InterChangeButton } from "../Common/InterChangeButton/InterChangeButton";
import { DateInput } from "../Common/Input/DateInput";

interface SearchBlockProps {
}

export function SearchBlock(props: SearchBlockProps) {
    const [cityFrom, setCityFrom] = useState<string>("");
    const [cityTo, setCityTo] = useState<string>("");
    const [dateStart, setDateStart] = useState<string>("");
    const [dateEnd, setDateEnd] = useState<string>("");


    const handleInterChangeCities = (event: MouseEvent<HTMLButtonElement>) => {
        const temp = cityFrom;
        setCityFrom(cityTo);
        setCityTo(temp);
    };


    return (
        <Container>
            <Input type={"text"} placeholder={"Откуда"} value={cityFrom} onValueChange={setCityFrom}/>
            <InterChangeButton onClick={handleInterChangeCities}/>
            <Input type={"text"} placeholder={"Куда"} value={cityTo} onValueChange={setCityTo}/>
            {/*И тут я сломался верстать под прототипы. Доделаю датовыбиралки, если время будет.*/}
            <DateInput placeholder={"Когда"} value={dateStart} onValueChange={setDateStart}/>
            <DateInput placeholder={"Обратно"} value={dateEnd} onValueChange={setDateEnd}/>
        </Container>
    );
}