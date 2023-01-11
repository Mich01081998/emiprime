import peliculas from "../json/cartelera.json"
import { Peli_Card } from "./peli_card.jsx";
import {ApiUrl} from '../servicios/API_rest'
import React, {useEffect, useState} from "react";
import axios from 'axios'
import estilos from "../css/peliculasGrid.module.css"

export function Peliculas(){

    const [backendData, setBackendData] = useState([{'flag': true}])

    const getInfo = async () => {
        // URI DEL CANAL DE CONEXION
        let url = ApiUrl + 'inicio/cartelera';
        const res = await axios.get(url)
        setBackendData({'pelis': res.data, 'flag': false});
        console.log('DATA ',res.data.cartelera)
    }

    useEffect(() => {
        getInfo();
    }, [])

    return(
        <div>
            <br/>
                <h1 className={estilos.tittle}>CARTELERA</h1>
            <br/>
            {typeof backendData['pelis'] === 'undefined' ? (
                <p>Loading...</p>
            ):(
                 <ul className={estilos.moviesGrid}>
                    {backendData.pelis.cartelera.map((pelicula) => <Peli_Card key={pelicula.id_peliculas} pelicula={pelicula} tipo_peli={'cartelera'}/>)}
                </ul>
                
                )}
        </div>
    );

/*     return(
        <div>
            <br/>
            <h1 className={estilos.tittle}>CARTELERA</h1>
            <br/>
            <ul className={estilos.moviesGrid}>
                {peliculas.map((pelicula) => <Peli_Card key={pelicula.id} pelicula={pelicula} tipo_peli={'cartelera'}/>)}
            </ul>
        </div>
    ); */
}