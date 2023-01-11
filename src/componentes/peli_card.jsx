import { Link } from "react-router-dom";
import estilos from "../css/PeliculaCard.module.css"
import React from 'react'

export function Peli_Card({pelicula, tipo_peli}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path
    // console.log({tipo_peli})
    const link_peli = "/pelicula/";

    return (<li className={estilos.peliculaCard}>
        <Link to={link_peli + pelicula.id_peliculas}>
            <img 
                width={230}
                height={345} 
                className={estilos.movieImage}
                src={pelicula.img_dir} 
                alt = {pelicula.nombre}
            />
        </Link>
        </li>
    );
}