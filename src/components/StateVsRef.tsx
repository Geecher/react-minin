import {useRef, useState} from "react";

function StateVsRef() {
    const input = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>('');

    function toggleShow(e: React.KeyboardEvent) {
        if (e.key === 'Enter' && input.current) {
            setInputValue(input.current.value);
        }
    }

    return (
        <div style={{marginBottom: '10em'}}>
            <h3>Input value: {inputValue}</h3>
            <input ref={input} type="text" className={'control'} onKeyDown={toggleShow} />
        </div>
    )
}

export default StateVsRef