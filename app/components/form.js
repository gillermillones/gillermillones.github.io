import { useState } from "react";
import Home from "./search_button";

function StateTest(props) {
    const [inputText, setInputText] = useState("");
    const [displayText, setDisplayText] = useState(false);

    const inputTextHandler = (e) => {
        const value = e.target.value;
        setDisplayText(false);
        setInputText(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setDisplayText(true);
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={inputTextHandler}></input>
                <button type="submit">Aceptar</button>
            </form>
            {displayText ? <Home name={inputText} /> : null}
        </>
    );
}
export default StateTest;