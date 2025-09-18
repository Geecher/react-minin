import './App.css'
import Header from "./components/Header.tsx";
import WayToTeach from "./components/WayToTeach.tsx";
import Button from "./components/Button/Button.tsx";
import {ways} from "./data.ts";

function App() {
    function handleClick(type: string) {
        console.log(`Button ${type} clicked`);
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
                                <WayToTeach key={index} title={way.title} description={way.description}/>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h2>Почему стоит учиться у нас?</h2>
                    <Button onClick={() => handleClick('way')}>Подход</Button>
                    <Button onClick={() => handleClick('easy')}>Доступность</Button>
                    <Button onClick={() => handleClick('program')}>Концентрация</Button>
                </section>
            </main>
        </>
    )
}

export default App
