import React, {useEffect, useState} from "react";
import estilos from "../css/contactanos.module.css"
import {ApiUrl} from '../servicios/API_rest'
//import contacto from "../json/contactanos.json"
//import foto from "../img/Sala_cine.jpg"

//const API = process.env.REACT_APP_API;
//const backendData = {}

export function Contactanos(){

    //##################### SOLICITUD INFO contact
    const [backendData, setBackendData] = useState([{}])



    const getInfo = async () => {
        // URI DEL CANAL DE CONEXION
        let url = ApiUrl + 'contact';
        const res = await fetch(url)
        setBackendData(await res.json());
    }
    
    useEffect(() => {
        getInfo();
    }, [])
    //################################

    const imageUrl = "https://primecinemas.com.bo/wp-content/uploads/2018/06/sala-3-1024x768.jpg"

    return(
        <div>
            {typeof backendData['mail'] === 'undefined' ? (
                <p>Loading...</p>
            ):(
                <div className={estilos.contenedorDetalles}>
                    
                    <div className={estilos.col + " " + estilos.infoDetails}>
                    <h1 className={estilos.title}>CONTACTANOS</h1>
                        <p>{backendData["mensaje"][0]} </p>

                        {/* <img src={foto} alt="fografia"/> */}

                        <p>{"Correo: " + backendData["mail"][0]} </p>
                        <p>{"Ubicación: " + backendData["ubicacion"][0]} </p>
                        <p>{"Numero: " + backendData["numeros de contacto"][0]} </p>
                    </div>
                    <img 
                        className={`${estilos.col} ${estilos.movieImage}`} 
                        src={imageUrl} 
                        alt="sala3.png"
                    />
                </div>
            )}
        </div>
    );
}