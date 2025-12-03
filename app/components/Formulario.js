"use client";

//import axios from 'axios';
const axios = require('axios');
const React = require('react');
//import { useState } from "react";
const { useState } = React;
//import Lista from './Lista'
const Lista = require('./Lista.js');

function Formulario(props) {
    const [libro, setLibro] = useState("");
    const [result, setResult] = useState([]);

    const clave = localStorage.getItem("librosPasados");
    if(clave != null){
      setResult(result);
    }

    function handleChange(event) {
        setLibro(event.target.value);
    }

    function handleBuscar(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + libro + "+intitle:").then((res) => {
            setResult(res.data.items);
            localStorage.setItem("librosPasados", result);
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
module.exports Formulario;