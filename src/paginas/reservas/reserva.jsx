import '../../css/reservas/fechas_select.css';
import '../../css/reservas/peliculas_select.css';
import React, {useEffect, useState} from "react";
//import axios from 'axios';
import {ApiUrl} from '../../servicios/API_rest';
import axios from 'axios';
//import { useHistory } from "react-router-dom";

//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {Sala1} from "./sala1";
import {Sala2} from "./sala2";
import {Sala3y4} from "./sala3y4";
import {Sala5} from "./sala5";

export function Reserva(){

  const borrarButacasSeleccionadas = () => {
    if(localStorage.getItem('ButSelecc') !== null){
      localStorage.removeItem('ButSelecc')
    }
  }

  const [reserv, setReserv] = useState({
    error: false,
    autorizado: true,
    selectFechas: false,
    selectPeliCar: false,
    peliName_Time: false,
    sala: '',
    errorMsg:""
  });

   const [fechas, setFechas] = useState({fecha: []});
   const [peliculas_car, setPeliculas_car] = useState({peli: []});
   const [butacas, setButacas] = useState({butaca: []});
   const [peli_seleccionada, setPeli_seleccionada] = useState({peli: 0})
   const [peliTittle, setPeliTittle] = useState({peliName: '', time: 0, precio: 0})
   //const [startDate, setStartDate] = useState(new Date("2018","06", "22"));

    const getFechas = async () => {
      let url = ApiUrl + 'fechas/carteleras';
      axios.get(url)
      .then( (response) => {
        console.log('pasala ',response.data.rows)
        //setFechas({fecha: response.data.rows, selectPeliCar: false, selectButacas: false})
        setFechas({fecha: response.data.rows})
        console.log(fechas)
      })
    }

    const getPeliculasCar = e =>{
        let url = ApiUrl + 'fechas/carteleras/movies';
        axios.post(url, {id_peli_cart: e.target.id})
        .then( (response) => {
          setReserv({selectFechas: true, selectPeliCar: false, sala: '', peliName_Time: false});
          console.log('pasala ',response.data)
          setPeliculas_car({peli: response.data})
        }).catch(error =>{
          console.log(error)
      })
        console.log(e.target.value)
    }

  const getButacas = (peliselect) =>{
    borrarButacasSeleccionadas();
    //enviarButacasAl3D();
    
      borrarButacasSeleccionadas();
      let url = ApiUrl + 'fechas/carteleras/movies/sala';
      //console.log(e.target)
      //console.log('nombre: ' + e.target.nombre)

      setReserv({selectPeliCar: false})
      console.log('ID BUTACAS F: ', peliselect.id_butacas_f)///////////////
      axios.post(url, {id_butacas_f: peliselect.id_butacas_f, id_pelicula_cart: peliselect.id_pelicula_cart})//////////////////
      .then( (response) => {
        setButacas({butaca: response.data})
        setPeliTittle({peliName: peliselect.nombre, time: peliselect.tiempo_reserva, precio: peliselect.precio_butacas})
        setReserv({selectFechas: true, selectPeliCar: true, sala: response.data[0].id_sala, peliName_Time: true});
        console.log('BUTACAS: ', response.data)
        console.log('sala: ', reserv.sala)
        console.log('PELI:'+ reserv)
        localStorage.setItem('peli', peliselect.id_pelicula_cart)/////////////////////
        localStorage.setItem('but_funcion', peliselect.id_butacas_f)
        localStorage.setItem('sala', response.data[0].id_sala)
      }).catch(error =>{
        console.log(error)
      })

    
  }

  const verificarToken = async () => {
    const info = localStorage.getItem('infoLogin');
    let url = ApiUrl + 'verifyToken';

    if(info !== null){
      // console.log('verificar: '+ JSON.parse(info).token)
      fetch(url, {
        method: "POST",
        headers: {'authorization': JSON.parse(info).token}
      })
      .then( (response) => response.json()).then(data =>{
        // console.log(data);
          if(data.msg === 'NO AUTORIZADO'){
            setReserv({autorizado: false})
            setReserv({errorMsg:"NO AUTORIZADO"})
          }
      })
    }
    else{
      setReserv({autorizado: false})
      setReserv({errorMsg:"NO AUTORIZADO"})
    }
  } 



  useEffect(() => {
    verificarToken();
    borrarButacasSeleccionadas();
    getFechas();
  }, [])

    return(

      //reserv.autorizado===true ?
      <div className="fecha-container">
      <p>SELECCIONA UNA FECHA:</p>
      <div >
        <div
          //id='slider'
          className='row'
        >
          {fechas.fecha.map(elemento =>(
            <div
            className='buttonFecha'
            key={'f_'+elemento.id_cartelera}
            id={elemento.id_cartelera}
            value={elemento.id_cartelera}
            onClick={getPeliculasCar}>
              {elemento.descripcion_cart}
            </div>
          ))}
        </div>
      </div>

      {reserv.selectFechas === true ?
      <>
        <div className="pelicula-container">
          <label>SELECCIONA UNA PELICULA:</label>
          <div>
            <div
              //id='slider'
              className='row'
            >
              {peliculas_car.peli.map(elemento =>(
                <div
                className='buttonpelicula'
                key={'f_'+elemento.id_pelicula_cart}
                id={elemento.id_butacas_f}
                onClick={() => getButacas(elemento)}
                nombre={elemento.nombre}
                sala={elemento.id_butacas_f}
                >
                  <img 
                    width={170}
                    height={220} 
                    className='movieImage'
                    src={elemento.img_dir}
                    alt = {elemento.nombre}
                    id={elemento.id_butacas_f}
                  />
                  <div id={elemento.id_butacas_f}>{elemento.nombre}</div>
                  <div id={elemento.id_butacas_f}>{elemento.desc_visualizacion}</div>
                  <div id={elemento.id_butacas_f}>{elemento.desc_sonido}</div>
                  <div id={elemento.id_butacas_f}>{elemento.desc_lenguaje}</div>
                  <div id={elemento.id_butacas_f}>{'Horario: ' + elemento.horario}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      :<p>Selecciona la fecha para ver las peliculas</p>}

    {reserv.peliName_Time === false ?
    <></>:
    <> 
    <h1><strong>{peliTittle.peliName + ', Tiempo de reserva: ' + peliTittle.time + ' minutos'}</strong></h1>
    <h1><strong>{'Precio por butaca: Bs. '+ peliTittle.precio }</strong></h1>
    </>
    }

    {reserv.selectPeliCar === true && localStorage.getItem('sala') === '1' ?
      <Sala1 butacas_param={butacas.butaca}/>:<h2></h2>
    }
    
    {reserv.selectPeliCar === true && localStorage.getItem('sala') === '2' ?
      <Sala2 butacas_param={butacas.butaca} pelicula={peli_seleccionada.peli}/>:<h2></h2>
    }

    {reserv.selectPeliCar === true && localStorage.getItem('sala') === '3' ?
      <Sala3y4 butacas_param={butacas.butaca}/>:<h2></h2>
    }

    {reserv.selectPeliCar === true && localStorage.getItem('sala') === '4' ?
      <Sala3y4 butacas_param={butacas.butaca}/>:<h2></h2>
    }

    {reserv.selectPeliCar === true && localStorage.getItem('sala') === '5' ?
      <Sala5 butacas_param={butacas.butaca}/>:<h2></h2>
    }

    </div> //:<h2>ERROR: {reserv.errorMsg}</h2>
    );
}

/* 

app.post('/info/reserva/cliente', async (req, res) => {

    const info = JSON.parse(req.body.usuario);
    var id_reserva = 0;
    var pelicula = '';
    var butacas = '';
    var fecha_reserva = '';
    var fecha_pelicula = '';

    var id_butacas_funcion = 0

    // OBTENER INFORMACION DE LA RESERVA
    console.log(info.datos['id_usuario']);
    var inf_reserva =  await pool.query(
        "select* from reserva where id_usuario_f= '"+ 
        info.datos['id_usuario'] + "'");

    // RECORRER LAS RESERVAS UNA POR UNA PARA OBTENER INFORMACION DE ELLAS :::::::::::::::::
    inf_reserva.rows.forEach( reserva => {
    
        id_reserva = reserva['id_reserva'];
        fecha_reserva = reserva['fecha_reserv'];
        butacas = reserva['butacas_reservadas'];

        // OBTENER INFORMACION DE LA FUNCION
        var inf_funcion = []
        pool.query(
            "select* from peliculas_cartelera where id_pelicula_cart= "+ 
            reserva['id_pelicula_cart_f'])
            .then( (response2) => {
                id_butacas_funcion = response2.rows[0]['id_butacas_f'];
                inf_funcion = response2;

                // OBTENER INFORMACION DE LA PELICULA
                pool.query(
                    "select* from pelicula where id_peliculas = "+ 
                    inf_funcion.rows[0]['id_pelicula_f'])
                    .then( (response2) => {
                        // console.log(response2.rows)
                        pelicula = response2.rows[0]['nombre'] + ' ' + 
                        response2.rows[0]['desc_sonido'] + ' ' + 
                        response2.rows[0]['desc_lenguaje'] + ' ' + 
                        response2.rows[0]['desc_visualizacion'];
                    })


                // COMPROBAR SI LA RESERVA YA EXPIRO
                pool.query(
                    "select* from cartelera where id_cartelera = "+ 
                    inf_funcion.rows[0]['id_cartelera_f'])
                    .then( (response2) => {
                        fecha_pelicula = response2.rows[0]['fecha_cart'] + ' ' + 
                        inf_funcion.rows[0]['horario'];
                    })
                    })

        console.log(reserva['id_reserva'])

    });// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    res.status(200).json({'msg': 'OK'});
})

*/