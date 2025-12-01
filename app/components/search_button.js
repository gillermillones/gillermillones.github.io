import React from "react";
import axios from "axios";
import { useState } from "react";

function Button() extends React.Component {
    const [people, setPeople] = useState([]);
    const buttonClickHandler = (e) => {
        alert("¡Has pulsado el botón!");
        axios.get("https://api-url/users").then((res) => {
            const users= res.data;
            setPeople(users);
        });
    };
    render(){
        return (
            <>
                <h1>Testing events</h1>
                <button onClick={buttonClickHandler}>Pulsar</button>
                <ul>
                    { people.map(person => <li>{person.name}</li>)}
                </ul>
            </>
        );
    }
    
}
export default EventTest;
