import {ReasonKey, reasons} from "../data.ts";
import {useState} from "react";
import Button from "./Button/Button.tsx";

function DifferencesSection() {
    const [contentType, setContentType] = useState<ReasonKey | null>(null);

    function handleClick(contentType: ReasonKey) {
        setContentType(contentType);
    }

    return (
        <section>
            <h2>Почему стоит учиться у нас?</h2>
            <Button
                isActive={contentType == ReasonKey.way}
                onClick={() => handleClick(ReasonKey.way)}>Подход</Button>
            <Button isActive={contentType == ReasonKey.easy}
                    onClick={() => handleClick(ReasonKey.easy)}>Доступность</Button>
            <Button isActive={contentType == ReasonKey.program}
                    onClick={() => handleClick(ReasonKey.program)}>Концентрация</Button>

            {contentType ? <p>{reasons[contentType]}</p> : <p>Нажмите на кнопку, чтобы узнать больше</p>}
        </section>
    )
}

export default DifferencesSection