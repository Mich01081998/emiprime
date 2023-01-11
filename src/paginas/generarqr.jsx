import React from 'react'
import axios from 'axios';
import {useState} from "react";
import {ApiUrl} from '../servicios/API_rest'
import '../css/reservas/salas.css'

export function GenerarQr(){

    const [Qr, setQr] = useState({fragmento_HTML: ``});
    
    const qr = () =>{
        let url = ApiUrl + 'generarqr';
        console.log(JSON.parse(localStorage.getItem("infoLogin")).datos.nombres)
        axios.post(url, {palabra: 'esto es una prueba', nombre: JSON.parse(localStorage.getItem("infoLogin")).datos.nombres},)
          .then( (response) => {console.log(response)//setQr({fragmento_HTML: response})
          }).catch(error =>{
            console.log(error)
        })
    }
    

    return(
        <>
        <button key='modelo' className='seat sala3d' onClick={qr}>
        GENERAR
        </button>

        <div>
            {Qr.fragmento_HTML}
        </div>
        </>
    );
}