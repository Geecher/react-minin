import logo from '../assets/react.svg';
import {useState, useEffect} from "react";

function Header() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <h3>Result University <img src={logo} alt=''/></h3>
            <span>Время: {time}</span>
        </header>
    )
}

export default Header