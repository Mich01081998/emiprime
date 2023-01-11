/* 
var today = new Date()
var targetDate = new Date("12/31/2022")
Math.floor(( today.getTime() - targetDate.getTime()) / 86400000 +365)
*/
import React , {useState}  from 'react'
import estilos from "../../css/peliculasGrid.module.css"
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
import {ApiUrl} from '../../servicios/API_rest'
import axios from "axios";

export function CartelerasCrud({infoCarteleras}){

    //const [usuarios, setUsuarios] = useState({info: infoPeliculas});
    const [state, setState] = useState({
        data: infoCarteleras,
        modalActualizar: false,
        modalInsertar: false,

        form: {
            id_cartelera:"",
            descripcion_cart:"",
            fecha_cart:"",
            dia_del_ao:"",
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
        //console.log(e.target.value)
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
        //console.log(dato)
        setState({
          form: dato,
          modalActualizar: true,
        });
    };

    const cerrarModalActualizar = () => {
        console.log(state.form)
        setState({
            form: {
                id_cartelera:"",
                descripcion_cart:"",
                fecha_cart:"",
                dia_del_ao:"",
            },
            modalActualizar: false });
    };

    const mostrarModalInsertar = () => {
        setState({
            form: {
                id_cartelera:"",
                descripcion_cart:"",
                fecha_cart:"",
                dia_del_ao:"",
            },
            modalInsertar: true,
        });
        console.log('MODAL INSERTAR ABIERTO')
    };

    const cerrarModalInsertar = () => {
        setState({ 
            form: {
                id_cartelera:"",
                descripcion_cart:"",
                fecha_cart:"",
                dia_del_ao:"",
            },
            modalInsertar: false });
        console.log('MODAL INSERTAR CERRADO')
    };

    // COSAS DE PRUEBA****************
    //*********************************

    const editar = (dato) => {
        var url = ApiUrl + 'crud/consult'
        var today = new Date(dato.fecha_cart)
        var targetDate = new Date("12/31/2022")
        var diadelao = Math.floor(( today.getTime() - targetDate.getTime()) / 86400000 +365)
        
        const list = [
            "update cartelera set descripcion_cart='"+ dato.descripcion_cart +"' where id_cartelera= " + dato.id_cartelera +" ;",
            "update cartelera set fecha_cart='"+ dato.fecha_cart +"' where id_cartelera= " + dato.id_cartelera +" ;",
            "update cartelera set dia_del_ao='"+ diadelao +"' where id_cartelera= " + dato.id_cartelera +" ;",
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

    const eliminar = (dato) => {
        var url = ApiUrl + 'crud/consult'
        var opcion = window.confirm("¿Desea eliminar registro de: "+dato.descripcion_cart+"?");
        if (opcion == true) {
            const consulta = 'delete from cartelera where id_cartelera='+ dato.id_cartelera +';'
            axios.post(url, {consulta: consulta})
            .then( (response) => {
                console.log(response)
                window.alert('ELIMINADO CORRECTAMENTE')
                window.location.href = '/admin/crud adminis tracion';
            }).catch(error =>{
                window.alert('ERROR AL ELIMINAR: ', error)
            })
        }
        console.log(infoCarteleras)
    };

    const insertar= ()=>{
        console.log(state.form)
        var url = ApiUrl + 'crud/consult'

        var today = new Date(state.form.fecha_cart)
        var targetDate = new Date("12/31/2022")
        var diadelao = Math.floor(( today.getTime() - targetDate.getTime()) / 86400000 + 365) +1
        
        const consulta = "INSERT INTO cartelera (descripcion_cart, fecha_cart, dia_del_ao)"+
        "VALUES ('" + state.form.descripcion_cart + "', "+
        "'"+state.form.fecha_cart + "', "+
        "'"+diadelao + "');"
        console.log(consulta)
        
        axios.post(url, {consulta: consulta})
        .then( (response) => {
            console.log(response)
            window.alert('INSERTADO CORRECTAMENTE')
            window.location.href = '/admin/crud adminis tracion';
        }).catch(error =>{
            window.alert('ERROR AL INSERTAR: ', error)
        })
    }

    return(
        <div>
            <h1 className={estilos.tittle}>CARTELERAS</h1>
            <Container>
                <br />
                <Button color="primary" onClick={mostrarModalInsertar}>NUEVO REGISTRO</Button>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Descripción</th>
                            <th>Fecha</th>
                            <th>Día del año</th>
                        </tr>
                    </thead>

                      <tbody>
                      
                         {infoCarteleras.map(dato => (
                            <tr key={dato.id_cartelera}>
                                

                                {/* <td>{dato.id_pelicula}</td> */}
                                <td>{dato.descripcion_cart}</td>
                                <td>{dato.fecha_cart}</td>
                                <td>{dato.dia_del_ao}</td>
                                <td>
                                    <Button color="primary" onClick={() => mostrarModalActualizar(dato)}>Editar</Button>
                                    <Button color="danger" onClick={()=> eliminar(dato)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={state.modalActualizar}>
                <ModalHeader>
                <div><h3>Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
{/*                     <FormGroup>
                        <label>ID:</label>
                        <input
                            className="form-control"
                            readOnly
                            name="id_usuario"
                            type="text"
                            value={state.form.id_usuario}
                            />
                    </FormGroup> */}
                    <FormGroup>
                        <label>Descripción: </label>
                        <input
                            className="form-control"
                            name="descripcion_cart"
                            type="text"
                            onChange={handleChange}
                            value={state.form.descripcion_cart}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Fecha: </label>
                        <input
                            className="form-control"
                            name="fecha_cart"
                            type="text"
                            onChange={handleChange}
                            value={state.form.fecha_cart}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Día del año: </label>
                        <input
                            className="form-control"
                            name="dia_del_ao"
                            type="text"
                            readOnly
                            onChange={handleChange}
                            value='ASIGNADO AUTOMANTICAMENTE'/>
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => editar(state.form)}>Editar</Button>
                    <Button color="danger" onClick={() => cerrarModalActualizar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={state.modalInsertar}>
                <ModalHeader>
                    <div><h3>Insertar</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Descripción: </label>
                        <input
                            className="form-control"
                            name="descripcion_cart"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>


                    <FormGroup>
                        <label>Fecha: </label>
                        <input
                            className="form-control"
                            name="fecha_cart"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Día del año: </label>
                        <input
                            className="form-control"
                            name="dia_del_ao"
                            type="text"
                            readOnly
                            onChange={handleChangeInsertar}
                            value='ASIGNADO AUTOMANTICAMENTE'/>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => insertar()}>Insertar</Button>
                    <Button className="btn btn-danger" onClick={() => cerrarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}