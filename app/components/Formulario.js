'use client';

import axios from 'axios';
//const axios = require('axios');
//const React = require('react');
import { useEffect, useState } from "react";
//const { useState } = React;
import Lista from './Lista';
//const Lista = require('./Lista.js');

function Formulario(props) {
    const [libro, setLibro] = useState("");
    const [result, setResult] = useState([]);
    let str = "";

    useEffect(() =>{
      const clave = localStorage.getItem("librosPasados");
      if(clave != null && clave != "" && clave != "undefined" && result.length == 0){
        setResult(JSON.parse(clave));
      }
    }, []);

    function handleChange(event) {
        setLibro(event.target.value);
    }

    function handleBuscar(event){
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + libro).then((res) => {
          str = "";
          setResult(res.data.items);
          if(!res || !res.data || res.data.totalItems == 0){
            setResult([]);
            //localStorage.setItem("librosPasados", "");
          }
          else if(result.length != 0){
            str += "[";
            str += JSON.stringify(res.data.items[0]);
            for(let x = 1; x < res.data.totalItems && x < 5; x++) {
              str += ",";
              str += JSON.stringify(res.data.items[x]);
            }
             str += "]";
            localStorage.setItem("librosPasados", str);
            console.log(res.data.items);
          }
        }).catch(function (error) {
          console.log("Error al buscar libros");
          setResult([]);
        });
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.error('Error registrando el Service Worker:', error);
        });
      });
    }

  return (
    <div>
      <form onSubmit={handleBuscar}>
        <label>Titulo del libro:
          <input type="text" class="searchBox" id="name" placeholder="P.Ej: El Principito" onChange={handleChange}></input>
        </label>
        <button type="submit" class="searchButton">Buscar libro</button>
      </form>
      <Lista props = {result}/>
      {result.length == 0 && 
        <h1 id="err">No se encontraron resultados</h1>
      }
    </div>
  );
}
export default Formulario;
//module.exports = Formulario;