import './App.css'
import Header from "./components/Header.tsx";
import WayToTeach from "./components/WayToTeach.tsx";
import Button from "./components/Button/Button.tsx";
import {ReasonKey, reasons, ways} from "./data.ts";
import {useState} from "react";

function App() {
    const [contentType, setContentType] = useState<ReasonKey | null>(null);

    function handleClick(contentType: ReasonKey) {
        setContentType(contentType);
    }

    return (
        <>
            <Header/>
            <main className="App">
                <section>
                    <h1>Добро пожаловать в Result University!</h1>
                    <ul>
                        {
                            ways.map((way, index) => (
                                <WayToTeach key={index} {...way}/>
                            ))
                        }
                    </ul>
                </section>
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
            </main>
        </>
    )
}

export default App
