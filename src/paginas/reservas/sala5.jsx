import '../../css/reservas/sala5.css'
import React, {useEffect, useState} from "react";
//import axios from 'axios';
import {ApiUrl} from '../../servicios/API_rest'
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Unity, { UnityContext } from "react-unity-webgl"

//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export function Sala5({butacas_param}){

    let history = useHistory()

    const [butacas, setButacas] = useState({butaca: butacas_param});
    const [sala3D, setSala3D] = useState({estado: false, butacas_reservadas: false, boton_ocupados: true});
    
    const unityContext = new UnityContext({
      loaderUrl: "./Unity/Sala5/Build/Sala 5.loader.js",
      dataUrl: "./Unity/Sala5/Build/Sala 5.data",
      frameworkUrl: "./Unity/Sala5/Build/Sala 5.framework.js",
      codeUrl: "./Unity/Sala5/Build/Sala 5.wasm",
    });

    const clickkCol = e =>{
            //COLUMNAS.........................................
           if(e.target.className === 'columna seat selected'){
            e.target.className="columna seat disponible";
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
            e.target.className="columna seat selected";
            var a = localStorage.getItem('ButSelecc')
            if(a !== null){
                var f= a.split(",");
                f.push(e.target.id)
                localStorage.setItem('ButSelecc', f);
            }else{
                localStorage.setItem('ButSelecc', e.target.id);
            }
        }//........................................................
    }

    const clickk = e =>{
        if(e.target.className !== 's5 seat ocupado' && 
           e.target.className !== 'seat ocupado' &&
           e.target.className !== 'columna seat ocupado')


        {
          if(e.target.className === 's5 seat selected')// QUITA LA SELECCION DE UNA BUTACA f seat
          {
            e.target.className="s5 seat disponible";
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
                e.target.className="s5 seat selected";
              }
              
              var a = localStorage.getItem('ButSelecc')
              if(a !== null){
                var f= a.split(",");
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
        if(element.fila == 'L' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedL', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
        if(element.fila == 'K' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedK', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
        if(element.fila == 'J' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedJ', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
        if(element.fila == 'I' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedI', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
        if(element.fila == 'H' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedH', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
        if(element.fila == 'G' && element.estado_butaca == "ocupado")
        {
              var P = element.ubicacion.split("",3);
              if(P.length >= 3){num = P[1] + P[2]
              }else{num = P[1]}
              console.log(num)
              unityContext.unityInstance.SendMessage('Javascript', 'TintRedF', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
        }
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
         
        var opcion = window.confirm("¿Desea reservar las butacas: " + a + "?");
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
        <div className="s5 seat disponible"></div>
        <small>DISPONIBLE</small>
      </li>

      <li>
        <div className="s5 seat selected"></div>
        <small>SELECCIONADO</small>
      </li>

      <li>
        <div className="s5 seat ocupado"></div>
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
              <button key='modelo' className='seat sala3dd' onClick={butacasReservadas}>
                MOSTRAR BUTACAS OCUPADAS
              </button>
            }

          </div>
          {/* fila L*/}
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'L'&&
              <div
                className={'seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila K*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'K'&&
              <div
                className={'s5 seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>
        
        {/* fila J*/}
            <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'J'&&
              <div
                className={'s5 seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila I*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'I'&&
              <div
                className={'s5 seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila H*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'H'&&
              <div
                className={'s5 seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>


        {/* fila G*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'G'&&
              <div
                className={'columna seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickkCol}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>


        {/* fila F*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'F'&&
              <div
                className={'columna seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickkCol}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>
        

        {/* fila E*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'E'&&
              <div
                className={'s5 seat '+elemento.estado_butaca}
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
                className={'s5 seat '+elemento.estado_butaca}
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
                className={'s5 seat '+elemento.estado_butaca}
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
                className={'s5 seat '+elemento.estado_butaca}
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
                className={'s5 seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}

        </div>
      <div className="screens5"> PANTALLA</div>

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