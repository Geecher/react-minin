import logo from '../../assets/react.svg';
import {useState, useEffect} from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #1a1a1a;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 2em;
    
    h3 {
        display: flex;
        align-items: center;
        gap: 0.4em;
    }
`

function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HeaderContainer>
            <h3>Result University <img src={logo} alt=''/></h3>
            <span>Время: {time.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}

export default Header