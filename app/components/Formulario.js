"use client";

import axios from 'axios';
import { useState } from "react";
import Lista from './Lista'

function Formulario(props) {
    const [libro, setLibro] = useState("");
    const [result, setResult] = useState([]);

    function handleChange(event) {
        setLibro(event.target.value);
    }

    function handleBuscar(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + libro + "+intitle:").then((res) => {
            setResult(res.data.items);
        });
    }

  return (
    <div>
        <form onSubmit={handleBuscar}>
          <label>Titulo del libro
            <input type="text" name="titulo" id="name" placeholder="P.Ej: El Principito" onChange={handleChange}></input>
          </label>
          <button type="submit">Buscar libro</button>
        </form>
        <Lista props = {result}/>
    </div>
  );
}
export default Formulario;