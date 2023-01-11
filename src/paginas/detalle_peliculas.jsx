import axios from 'axios'
import {ApiUrl} from '../servicios/API_rest'
import estilos from "../css/pelicula.module.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import React, {useEffect, useState} from "react";
import ReactPlayer from 'react-player'; //REPRODUCTOR VIDEOS
import { Link } from "react-router-dom";

export function DetallePeliculas() {
    
    const  { peliculaID } = useParams();
    const [backendData, setBackendData] = useState([{'flag': true}])
    var bandera = true;

    const getInfoPeli = async () => {
        if(bandera === true)
        {
            bandera = false;
            const url = ApiUrl + 'pelicula/detalle';
            console.log('Pelicula seleccionada: ',peliculaID);
            const res = await axios.post(url, {id_peli_detalle: peliculaID});
            console.log('HECHO:', res.data)
            setBackendData({'peli': res.data, 'flag': false});
        }
    }

    useEffect(() => {
        getInfoPeli();
    }, [])

    //const imageUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path

    return <div >
                <br/>
                {typeof backendData['peli'] === 'undefined' ? (
                    <p>Loading...</p>
                ):(
                    <div className={estilos.contenedorDetalles}>
                        
                        <div className={`${estilos.col} ${estilos.movieImage}`}>
                            <img
                                className={`${estilos.col} ${estilos.movieImage}`} 
                                src={backendData.peli.pelicula_detalle[0].img_dir} 
                                alt={backendData.peli.pelicula_detalle[0].nombre}
                            />
                        </div>
                        <div className={estilos.col + " " + estilos.movieDetails}>
                            <p className={estilos.primerParrafo}><strong>Nombre: </strong>{backendData.peli.pelicula_detalle[0].nombre}</p>
                            <p><strong>Descripcion: </strong> {backendData.peli.pelicula_detalle[0].descripcion}</p>
                            <p><strong>Fechas de proyeccción: </strong></p>

                            {backendData.peli.proyecciones.map(dato =>(
                                <p>{dato}</p>
                            ))}

                            <p><strong>Trailer: </strong></p>
                            <div className={estilos.playerWrapper}>
                                <ReactPlayer
                                    //className={estilos.reactPlayer}
                                    url={backendData.peli.pelicula_detalle[0].link_trailer}
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                            <div className={estilos.reserVar}>
                            {localStorage.getItem("infoLogin") ?
                            <>
                                <Link className={estilos.button} to={"/Reserva"}>RESERVAR</Link>
                            </>:<>
                                <Link className={estilos.button} to={"/login"}>RESERVAR</Link>
                            </>}
                                
                            </div>
                        </div>
                        
                    </div>
                    )}
          </div>
}
{/* <div className={estilos.contenedorDetalles}> 
                
                
           </div> */}