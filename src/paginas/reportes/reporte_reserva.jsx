import React , {useState, useEffect}  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav,  Navbar, Container, Button, NavDropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import estilos from "../../css/peliculasGrid.module.css"
import {ApiUrl} from '../../servicios/API_rest';
import axios from "axios";
import { PDFDownloadLink } from '@react-pdf/renderer';
import DocuPDF from "./DocuPDF";

export function Reportes_reservas(){
    const [state, setState] = useState({
        form: {
            detalle: ""
        },
        modalidad: "",
        identificador_reporte: "",
        error: false,
        errorMsg: "",
        descargar: false,
        reporte: {}
    })
    
    const handleChange = (e) => {
        setState({...state,
          form: {
            ...state.form,
            [e.target.name]: e.target.value,
          },
        });
        console.log(e.target.value)
    };

    const modalidad_dia = () =>{
        setState({...state, modalidad: "Reporte del día, ej: 2022-10-21", identificador_reporte: "DIA"});
        console.log("DIA")
    }

    const modalidad_mes = () =>{
        setState({...state, modalidad: "Reporte del mes, ej: 2022-10", identificador_reporte: "MES"});
        console.log("MES")
    }

    const modalidad_year = () =>{
        setState({...state, modalidad: "Reporte del año, ej: 2022", identificador_reporte: "AÑO"});
        console.log("AÑO")
    }

    const modalidad_pelicula = () =>{
        setState({...state, modalidad: "Reporte de pelicula, ej: Cherry", identificador_reporte: "PELICULA"});
        console.log("PELICULA")
    }

    const modalidad_sala = () =>{
        setState({...state, modalidad: "Digite el numero de sala, ej: 1", identificador_reporte: "SALA"});
        console.log("SALA")}

    /* 

    const pelicula = () =>{
        setState({...state, modalidad: "Reporte de pelicula, ej: Godzilla vs. Kong", identificador_reporte: "PELICULA"});
        console.log("PELICULA")
    } */

    const report = () =>{
        if(state.form.detalle !== ""){
            var url = ApiUrl + "reporte/reserva"
            console.log("REPORT ",state.identificador_reporte)
            axios.post(url, {'detalle': state.form.detalle, 'ident': state.identificador_reporte})
            .then( (response) => {
                console.log(response.data);
                setState({...state, descargar: true, reporte: response.data});
                
            }).catch(error =>{
                window.alert('ERROR EN LA CONEXION: ', error)
            })
        }else{
            window.alert('DIGITA EL DETALLE DEL REPORTE')
        }
        console.log('STATE: ', state)
    }

    return (<div>
        <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br />
                        <div className="fadeIn first">
                            <h1>REPORTES DE RESERVA</h1>
                        </div>
                        <br />
                        <form /* onSubmit={this.manejadorSubmit} */>
                            <NavDropdown title="Modalidad de reporte">
                                <DropdownItem onClick={modalidad_dia} >Reporte del día</DropdownItem>
                                <DropdownItem onClick={modalidad_mes} >Reporte del mes</DropdownItem>
                                <DropdownItem onClick={modalidad_year} >Reporte del año</DropdownItem>
                                <DropdownItem onClick={modalidad_pelicula} >Reporte por pelicula</DropdownItem>
                                <DropdownItem onClick={modalidad_sala} >Reporte por salas</DropdownItem>
                            </NavDropdown>
                             <br />
                            {state.modalidad !== "" &&
                                <>
                                    <input type="text" id="detalle" className="fadeIn third" name="detalle" placeholder={state.modalidad} onChange={handleChange}/>
                                    <br />
                                </>
                            }
                        </form>

                        <div id="formFooter">
                            {state.error === true &&
                                <div className='alert alert-danger' role='alert'>
                                    {state.errorMsg === 'ERROR, CUENTA NO ACTIVADA' ?
                                        <>
                                        {state.errorMsg}
                                        <br></br>
                                        <a className="underlineHover" href="/login/activar cuenta">Activar Cuenta</a>
                                        </>
                                        :state.errorMsg
                                    }
                                </div>
                            }
                            <a className="underlineHover" onClick={report}>Generar reporte</a>

                            <br />

                            {state.descargar === true &&
                                <PDFDownloadLink 
                                    key={state.identificador_reporte}
                                    document={<DocuPDF info_reporte={state.reporte}></DocuPDF>}
                                    fileName='reporte_reservas.pdf'
                                    >
                                    <a className="underlineHover" onClick={report}>DESCARGAR PDF</a>
                                </PDFDownloadLink>
                            }
                        </div>

                    </div>
                </div>
        </React.Fragment>
        <br />
        <h1 ></h1>
        
    </div>);
}
