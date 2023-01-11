import React , {useState, useEffect}  from 'react';
import estilos from "../../css/peliculasGrid.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import {NavDropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

import {ApiUrl} from '../../servicios/API_rest';
import axios from "axios";

export function PeliculaFuncionCrud({infoFuncionesID, infoFuncionesNombres, peliculas, carteleras_info, salas}){

    //const [usuarios, setUsuarios] = useState({info: infoPeliculas});
    const [state, setState] = useState({
        data: infoFuncionesID,
        modalActualizar: false,
        modalInsertar: false,

        minutos_editar: {},

        form: {
            id_pelicula_cart: "",
            fecha: "",
            horario: "",
            sala: "",
            pelicula: "",
            tiempo_reserva: "",
            precio_butacas: "",
        },

        form_list: {
            id_cartelera:[],
            id_sala:[],
            id_pelicula:[],
        },
    })

    const handleChangeInsertar = (e) => {
        setState({
          form: {
            ...state.form,
            [e.target.name]: e.target.value,
          },
          modalInsertar: true,
        });
        console.log(e.target.value)
    };

    const handleChange = (e) => {
        setState({
          form: {
            ...state.form,
            [e.target.name]: e.target.value,
          },
          modalActualizar: true,
        });
        //console.log(e.target.value)
    };

    const mostrarModalActualizar = (dato) => {
        setState({form: dato,
          modalActualizar: true,
        });
    };  

    const cerrarModalActualizar = () => {
        console.log(state.form)
        setState({
            form: {
                fecha: "",
                horario: "",
                sala: "",
                pelicula: "",
                tiempo_reserva: "",
                precio_butacas: "",
            },
            modalActualizar: false });
    };

    const carteleras = () =>{
        var url = ApiUrl + 'crud/consult'
        var carteleras = [];
        axios.post(url, {consulta: "SELECT * FROM cartelera"})
        .then( (response3) => {
            console.log(response3.data.rows)
            response3.data.rows.forEach(element => {
                carteleras.push({'id_cartelera': element.id_cartelera, 'descripcion_cart': element.descripcion_cart})
            });
            return carteleras;
        }) 
    }

    const info_insertar = async () => {
        
        console.log('MODAL INSERTAR ABIERTO')
        console.log('SALAS ',salas )
        console.log('PELICULAS ', peliculas)
        console.log('CARTELERA ', carteleras_info)

        console.log('INFOCARTELARAS ', infoFuncionesNombres)
    }

    const mostrarModalInsertar = async () => {
        setState({
            form: {
                fecha: "",
                horario: "",
                sala: "",
                pelicula: "",
                tiempo_reserva: "",
                precio_butacas: "",
            },
            modalInsertar: true
        });
    };

    const seleccionarCartelera = e => {
        setState({form: {...state.form, fecha: e.target.value}, modalInsertar: true})
        console.log('ya casi ', e.target.value)
    }

    const seleccionarPelicula = e => {
        setState({form: {...state.form, pelicula: e.target.value}, modalInsertar: true})
        console.log('ya casi ', e.target.value)
    }
 
    const seleccionarSala = e => {
        setState({form: {...state.form, sala: e.target.value}, modalInsertar: true})
        console.log('ya casi ', e.target.value)
    }

    const cerrarModalInsertar = () => {

        setState({ 
            form: {
                fecha: "",
                horario: "",
                sala: "",
                pelicula: "",
                tiempo_reserva: "",
                precio_butacas: "",
            },
            modalInsertar: false });
        console.log('MODAL INSERTAR CERRADO')
    };

    // COSAS DE PRUEBA****************
    const allgo = () => {
        console.log(infoFuncionesNombres)
    }
    //*********************************

    //No necesario para esta vez 
    const editar = (dato) => {
        var url = ApiUrl + 'crud/consult'

        const list = [
            "update peliculas_cartelera set horario='"+ dato.horario +"' where id_pelicula_cart= " + dato.id_pelicula_cart +" ;",
            "update peliculas_cartelera set tiempo_reserva='"+ dato.tiempo_reserva +"' where id_pelicula_cart= " + dato.id_pelicula_cart +" ;",
            "update peliculas_cartelera set precio_butacas='"+ dato.precio_butacas +"' where id_pelicula_cart= " + dato.id_pelicula_cart +" ;"
        ]

        var errbool = false;
        var err;
        list.forEach(element => {
            console.log(element)
            axios.post(url, {consulta: element})
            .then( (response) => {
                console.log(response)
            }).catch(error =>{
                errbool = true;
                err = error;
            })
        })
        if(errbool){
            window.alert('ERROR AL ACTUALIZAR: ', err)
        }else{
            window.alert('ACTULIZADO CORRECTAMENTE');
            window.location.href = '/admin/crud adminis tracion';
        }
    };

    const eliminar = async (dato) => {
        var url = ApiUrl + 'crud/consult'
        var opcion = window.confirm("¿Desea eliminar registro de: "+dato.id_pelicula_cart+"?");
        if (opcion == true) {

            var consulta = 'SELECT* from peliculas_cartelera where id_pelicula_cart='+ dato.id_pelicula_cart +';';
            const peli_cart = await axios.post(url, {consulta: consulta});

            console.log('PELICULA CARTELERA A ELIMINAR: ',peli_cart)

            var list_consultas = [
                'delete from butaca where id_butacas_funcion_f='+ peli_cart.data.rows[0].id_butacas_f +';',
                'delete from peliculas_cartelera where id_pelicula_cart='+ dato.id_pelicula_cart +';',
                'delete from butacas_funcion where id_butacas_funcion='+ peli_cart.data.rows[0].id_butacas_f +';'
            ]
            for (let i = 0; i < list_consultas.length; i++) {
                consulta = list_consultas[i];

                await axios.post(url, {consulta: consulta})
                .then( (response) => {
                    console.log(response)
                }).catch(error =>{
                    window.alert('ERROR AL ELIMINAR: ', error)
                })
            }
            window.alert('ELIMINADO CORRECTAMENTE')
            window.location.href = '/admin/crud adminis tracion';

        }
        console.log(infoFuncionesID)
    };

    const insertar= ()=>{
        console.log('Insertar: ',state.form)
        var url = ApiUrl + 'crud/insert_peli'

        axios.post(url, {info: state.form})
        .then( (response) => {
            console.log(response)
            window.alert('INSERTADO CORRECTAMENTE')
            window.location.href = '/admin/crud adminis tracion';
        }).catch(error =>{
            window.alert('ERROR AL INSERTAR: ', error)
        })
    }
 
    useEffect(() => {
        info_insertar();
    }, [])
 
    return(
        <div>
            <h1 className={estilos.tittle}>PELICULAS EN CARTELERAS</h1>
            <Container>
                <br />
                <Button color="primary" onClick={mostrarModalInsertar}>NUEVO REGISTRO</Button>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Horario</th>
                            <th>Sala</th>
                            <th>Pelicula</th>
                            <th>Minutos de Reserva</th>
                            <th>Precio por butaca</th>
                        </tr>
                    </thead>

                      <tbody>
                         {infoFuncionesNombres.map(dato => (
                            <tr key={dato.id_pelicula_cart}>
                                <td>{dato.descripcion_cart}</td>
                                <td>{dato.horario}</td>
                                <td>{dato.sala}</td>
                                <td>{dato.nombre_peli}</td>
                                <td>{dato.tiempo_reserva}</td>
                                <td>{dato.precio_butacas}</td>
                                <td>
                                    {//<Button color="primary" onClick={() => mostrarModalActualizar(dato)}>Editar</Button> 
                                    }
                                    <Button color="primary" onClick={() => mostrarModalActualizar(dato)}>Editar</Button>
                                    <Button color="danger" onClick={()=> eliminar(dato)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={state.modalInsertar}>
                <ModalHeader>
                    <div><h3>Agregar</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <select className="form-select" aria-label="Default select example" onChange={seleccionarCartelera}>
                            <option selected="">Selecciona la fecha de la cartelera</option>
                            {carteleras_info.map(dato => (
                                    <option value={dato.id_cartelera}>{dato.descripcion_cart}</option>
                             ))}
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <select className="form-select" aria-label="Default select example" onChange={seleccionarPelicula}>
                            <option selected="">Selecciona la pelicula</option>
                            {peliculas.map(dato => (
                                    <option value={dato.id_peliculas}>{dato.nombre}</option>
                             ))}
                        </select>
                    </FormGroup>

                    <FormGroup>
                    <select className="form-select" aria-label="Default select example" onChange={seleccionarSala}>
                            <option selected="">Selecciona la sala</option>
                            {salas.map(dato => (
                                    <option value={dato.id_sala}>{dato.descripcion_sala}</option>
                             ))}
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <label>Horario: </label>
                        <input
                            className="form-control"
                            name="horario"
                            type="text"
                            onChange={handleChangeInsertar}
                            placeholder='Digita el horario, ej: 20:34:00'/>
                    </FormGroup>

                    <FormGroup>
                        <label>Minutos reserva: </label>
                        <input
                            className="form-control"
                            name="minutos"
                            type="text"
                            onChange={handleChangeInsertar}
                            placeholder='Digita la cantidad de minutos'/>
                    </FormGroup>

                    <FormGroup>
                        <label>Precio por butaca: </label>
                        <input
                            className="form-control"
                            name="precio_butacas"
                            type="text"
                            onChange={handleChangeInsertar}
                            placeholder='Digita el precio de los boletos'/>
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => insertar()}>Insertar</Button>
                    <Button className="btn btn-danger" onClick={() => cerrarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={state.modalActualizar}>
                <ModalHeader>
                    <div><h3>EDITAR</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>HORARIO: </label>
                            <input
                                className="form-control"
                                name="horario"
                                type="text"
                                onChange={handleChange}
                                value={state.form.horario}/>
                    </FormGroup>
                </ModalBody>

                <ModalBody>
                    <FormGroup>
                        <label>MINUTOS: </label>
                            <input
                                className="form-control"
                                name="tiempo_reserva"
                                type="text"
                                onChange={handleChange}
                                value={state.form.tiempo_reserva}/>
                    </FormGroup>

                    <FormGroup>
                        <label>PRECIO POR BUTACAS: </label>
                            <input
                                className="form-control"
                                name="precio_butacas"
                                type="text"
                                onChange={handleChange}
                                value={state.form.precio_butacas}/>
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => editar(state.form)}>EDITAR</Button>
                    <Button className="btn btn-danger" onClick={() => cerrarModalInsertar()}>CANCELAR</Button>
                </ModalFooter>
            </Modal>


        </div>
    );
}