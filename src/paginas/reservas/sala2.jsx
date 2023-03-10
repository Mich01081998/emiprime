import '../../css/reservas/salas.css'
import '../../css/reservas/fechas_select.css'
import '../../css/reservas/peliculas_select.css'
import React, {useEffect, useState} from "react";
//import axios from 'axios';
import {ApiUrl} from '../../servicios/API_rest'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export function Sala2({butacas_param, pelicula}){

    let history = useHistory()

    const [butacas, setButacas] = useState({butaca: butacas_param});
    const [sala3D, setSala3D] = useState({estado: false, butacas_reservadas: false, boton_ocupados: true});

    //const [confirmar, setConfirmar] = useState({modalReservar: false, confirmado}); // MODAL PARA CONFIRMACION DE RESERVA

    const unityContext = new UnityContext({
      loaderUrl: "./Unity/Sala2/Build/Prueba - 1903pm.loader.js",
      dataUrl: "./Unity/Sala2/Build/Prueba - 1903pm.data",
      frameworkUrl: "./Unity/Sala2/Build/Prueba - 1903pm.framework.js",
      codeUrl: "./Unity/Sala2/Build/Prueba - 1903pm.wasm",
    });
    
    const clickk = e =>{
        if(e.target.className !== 'f seat ocupado' && e.target.className !== 'seat ocupado')
        {
          if(e.target.className === 'f seat selected')// QUITA LA SELECCION DE UNA BUTACA fseat
          {
            e.target.className="f seat disponible";
            var a = localStorage.getItem('ButSelecc').split(",");
            var aux = []
            for (let i = 0; i < a.length; i++) {
                if(a[i] !== e.target.id){
                    aux.push(a[i])}}
            localStorage.setItem('ButSelecc', aux);
            if(localStorage.getItem('ButSelecc') === ''){
              localStorage.removeItem('ButSelecc')
            }
          }else{// SELECCIONA UNA BUTACA
            if(e.target.className === 'seat selected'){//QUITA LA SELECCION DE UNA BUTACA seat
              e.target.className="seat disponible";
              var a = localStorage.getItem('ButSelecc').split(",");
              var aux = []
              for (let i = 0; i < a.length; i++) {
                  if(a[i] !== e.target.id){
                      aux.push(a[i])}}
              localStorage.setItem('ButSelecc', aux);
              if(localStorage.getItem('ButSelecc') === ''){
                localStorage.removeItem('ButSelecc')
              }
            }else{
              if(e.target.className === 'seat disponible'){
                e.target.className="seat selected";
              }else{
                e.target.className="f seat selected";
              }
              
              var a = localStorage.getItem('ButSelecc')
              if(a !== null){
                var f = a.split(",");
                f.push(e.target.id)
                localStorage.setItem('ButSelecc', f);
              }else{
                localStorage.setItem('ButSelecc', e.target.id);
              }
            
            }
    
          }
        }
      }

    const modelo3d = () =>{
      setSala3D({estado: true, butacas_reservadas: true})
    }

    const butacasReservadas = () =>{
      enviarButacasAl3D();
    }

    const enviarButacasAl3D = () => {
      butacas.butaca.forEach(element => {
        var num;
        //console.log('ESTO ES UNA BUTACA: ',element)
          if(element.fila == 'F' && element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedF', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
          }
          if(element.fila == 'E' && element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedE', num-1);
          }
          if(element.fila == 'D' && element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedD', num-1);
          }
          if(element.fila == 'C' && element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedC', num-1);
          }
          if(element.fila == 'B' && element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedB', num-1);
          }
          if(element.fila == 'A'&& element.estado_butaca == "ocupado")
          {
                var P = element.ubicacion.split("",3);
                if(P.length >= 3){num = P[1] + P[2]
                }else{num = P[1]}
                console.log(num)
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedA', num-1);
          }
      });
      //setSala3D({boton_ocupados: false});
      console.log('SE DESACTIVO EL BOTON');
      //unityContext.unityInstance.SendMessage('Javascript', 'TintRedF', 3);
    }
  
    const reservar = () =>{
      let url = ApiUrl + 'reservar';
      if(localStorage.getItem('ButSelecc') !== null){
         var a = localStorage.getItem('ButSelecc').split(",");
         
        var opcion = window.confirm("??Desea reservar las butacas: " + a + "?");
        if (opcion == true) {

          const hoyfecha = new Date();
          axios.post(url, {
            funcion: localStorage.getItem('but_funcion'), 
            id_peli: localStorage.getItem('peli'),
            butacas: a,
            token: localStorage.getItem('infoLogin'),
            hoy: hoyfecha})
          .then( (response) => {
            console.log('pasala ',response.data)
            window.alert("SE RESERVO CORRECTAMENTE")
            window.location.href = '/'
          }).catch(error =>{
            console.log(error)
          })
        }
      }else{
        window.alert("SELECCIONE SUS BUTACAS") //AUMENTE JEJE
      }
  }

    return (
        <>
        <ul className="showcase">
      <li>
        <div className="f seat disponible"></div>
        <small>DISPONIBLE</small>
      </li>

      <li>
        <div className="f seat selected"></div>
        <small>SELECCIONADO</small>
      </li>

      <li>
        <div className="f seat ocupado"></div>
        <small>OCUPADO</small>
      </li>
        </ul> 
      <div className="container filas">
        
        <div className="row">
        <div className='buttons'>
            <div key='reservar' className='seat reservar' onClick={reservar}>
              RESERVAR
            </div>
            <div key='modelo' className='seat sala3d' onClick={modelo3d}>
              MODELO 3D
            </div>
            {sala3D.butacas_reservadas === true &&
              <button key='modelo 2' className='seat sala3dd' onClick={butacasReservadas}>
                MOSTRAR BUTACAS OCUPADAS
              </button>
            }

          </div>
          {/* fila F*/}
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'F'&&
              <div
                className={'seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila E*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'E'&&
              <div
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila D*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'D'&&
              <div
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila C*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'C'&&
              <div
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila B*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'B'&&
              <div
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila A*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'A'&&
              <div
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}

        </div>
      <div className="screen"> PANTALLA</div>

      {sala3D.estado === true &&
      <>

      <Unity 
        unityContext={unityContext}
        style={{
        width: "900px",
        height: "500px",
        border: "2px solid black",
        top: "50%",
        left: "50%",
        background: "black"
      }}/>
      </>
      }
      </div>
    </>
    );
}