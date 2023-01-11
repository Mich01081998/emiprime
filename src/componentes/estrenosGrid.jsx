import peliculas from "../json/estrenos.json"
import estilos from "../css/peliculasGrid.module.css"
import { Peli_Card } from "./peli_card.jsx";
import React from 'react'

export function Estrenos(){

    //console.log(peliculas.map((pelicula) => <Peli_Card key={pelicula.id} pelicula={pelicula} tipo_peli={'estrenos'}/>));
    return(
        <div>
            <br/>
            <h1 className={estilos.tittle}>PROXIMOS ESTRENOS</h1>
            <br/>
            <ul className={estilos.moviesGrid}>
                {peliculas.map((pelicula) => <Peli_Card key={pelicula.id} pelicula={pelicula} tipo_peli={'estrenos'}></Peli_Card>)}
            </ul>
        </div>
    );
}