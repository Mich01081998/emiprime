import '../../css/reservas/sala3.css'
import '../../css/reservas/fechas_select.css'
import '../../css/reservas/peliculas_select.css'
import React, {useEffect, useState, useCallback} from "react";
//import axios from 'axios';
import {ApiUrl} from '../../servicios/API_rest'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


export function Sala3y4({butacas_param}){

    let history = useHistory()

    const [butacas, setButacas] = useState({butaca: butacas_param});
    const [sala3D, setSala3D] = useState({estado: false, butacas_reservadas: false, boton_ocupados: true});

    const unityContext = new UnityContext({
      loaderUrl: "./Unity/Sala3y4/Build/Sala 3y4.loader.js",
      dataUrl: "./Unity/Sala3y4/Build/Sala 3y4.data",
      frameworkUrl: "./Unity/Sala3y4/Build/Sala 3y4.framework.js",
      codeUrl: "./Unity/Sala3y4/Build/Sala 3y4.wasm",
    });

/*     useEffect(() => {
      unityContext.unityInstance.addEventListener("SeleccionarButaca", butacas_recibidas );
      return () => {
        unityContext.unityInstance.removeEventListener("SeleccionarButaca", butacas_recibidas);
      };
    }, []);

    const butacas_recibidas = useCallback((posicionButaca) => {
      console.log(posicionButaca)
    }, []); */

    const clickk = e =>{
        if(e.target.className !== 'f seat ocupado' && e.target.className !== 'seat ocupado')
        {
          if(e.target.className === 'f seat selected')// QUITA LA SELECCION DE UNA BUTACA fseat
          {
            e.target.className="f seat disponible";

            //unityContext.unityInstance.SendMessage('Javascript', 'TintRedI', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0

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
                      aux.push(a[i])
                      
                    }}
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

              //const funcion = 'TintGreen';
              const butacas_para_3D = e.target.id.split("");
              var funcion = '';
              var numero = '';
              if(butacas_para_3D.length === 3){
                funcion = 'TintGreen' + butacas_para_3D[0];
                numero = butacas_para_3D[1] + '' + butacas_para_3D[2];
              }else{
                funcion = 'TintGreen' + butacas_para_3D[0];
                numero = butacas_para_3D[1] + '';
              }
              
              if(a !== null){
                var f = a.split(",");
                f.push(e.target.id)
                console.log('BUTACA SELECCIONADA ', )
                
                //unityContext.unityInstance.SendMessage('Javascript', funcion , numero);
                localStorage.setItem('ButSelecc', f);
              }else{
                localStorage.setItem('ButSelecc', e.target.id);
                console.log('BUTACA SELECCIONADA ', e.target.id)
                //unityContext.unityInstance.SendMessage('Javascript', funcion , numero);
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
                unityContext.unityInstance.SendMessage('Javascript', 'TintRedG', num-1);// MENOS 1 PORQUE EN UNITY COMIENZA DESDE 0
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
              <button key='modelo' className='seat sala3dd' onClick={butacasReservadas}>
                MOSTRAR BUTACAS OCUPADAS
              </button>
            }
          </div>
          {/* fila I*/}
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'I'&&
              <div
                className={'seat '+elemento.estado_butaca}
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
                className={'f seat '+elemento.estado_butaca}
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
                className={'f seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
              {elemento.ubicacion}</div>
            ))}
        </div>

        {/* fila F*/}
        <div className="row">
            {butacas.butaca.map(elemento =>(
              elemento.fila === 'F'&&
              <div
                className={'f seat '+elemento.estado_butaca}
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
                className={'x seat '+elemento.estado_butaca}
                id={elemento.ubicacion}
                onClick={clickk}
                key={elemento.ubicacion}>
                {elemento.ubicacion}</div>
            ))}
        </div>
        <br />

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
      <div className="screens3_4"> PANTALLA</div>

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