import estilos from "../../css/peliculasGrid.module.css"
//import estilos from "../css/volver.module.css"
import React , {useEffect, useState}  from 'react'
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

export function ReservasCrud({infoReservas}){

    //const [usuarios, setUsuarios] = useState({info: infoUsuarios});
    const [state, setState] = useState({
        data: infoReservas,
        modalActualizar: false,

        form: {
            id_reserva:"",
            id_usuario_f:"",
            dir_qr:"",
            codigo_de_reserva:"",
            butacas_reservadas:"",
            id_peliculas_cart_f:"",
            fecha_reserv:"",
        },
    })

    const mostrarActualizar = (dato) => {
        //console.log(dato)
        setState({
          form: dato,
          modalActualizar: true
        });
        localStorage.setItem('But_a_modf', dato.butacas_reservadas);
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



    const eliminar = (dato) => {
        var url = ApiUrl + 'reserva/cancelar'
        console.log('RESERVA A CANCELAR: ', dato)
        var opcion = window.confirm("¿Desea cancelar la reserva: "+dato.id_reserva+"?");
        if (opcion == true) {
            const consulta = 'delete from reserva where id_reserva='+ dato.id_reserva +';'
            axios.post(url, {reserva: dato})
            .then( (response) => {
                console.log(response)
                window.alert('CANCELADO CORRECTAMENTE')
                window.location.href = '/admin/crud adminis tracion';
            }).catch(error =>{
                window.alert('ERROR AL CANCELAR: ', error)
            })
        }
        console.log(infoReservas)
    };

    const Actualizar = (dato) => {
        console.log(state.form)
        var url = ApiUrl + 'reserva/modificar_butacas'

        if(dato.butacas_reservadas === localStorage.getItem('But_a_modf') || dato.butacas_reservadas === ''){
            window.alert('DEBE DIGIRAR LAS BUTACAS POR OTRAS, EJ: B12,B13')
        }else{
            axios.post(url, {reserva: dato, butacas_anteriores: localStorage.getItem('But_a_modf')})
            .then( (response) => {
                console.log(response)
                if(response.data.msg === 'OK'){
                    window.alert('MODIFICADO CORRECTAMENTE')
                    window.location.href = '/admin/crud adminis tracion';
                }else{
                    window.alert('ERROR AL MODIFICAR LAS BUATACA(S): ' + response.data.butacas.toString())
                }
            }).catch(error =>{
                window.alert('ERROR AL MODIFICAR: ', error)
            })
        }
            
    };

    const cerrarModalActualizar = () => {
        console.log(state.form)
        setState({
            form: {
                id_reserva:"",
                id_usuario_f:"",
                dir_qr:"",
                codigo_de_reserva:"",
                butacas_reservadas:"",
                id_peliculas_cart_f:"",
                fecha_reserv:""
            },
            modalActualizar: false });
            localStorage.removeItem('But_a_modf')
    };

    const insertar= ()=>{
        window.alert('INGRESANDO AL APARTADO DE RESERVAS, PARA REGISTRAR UNA RESERVA')
        window.location.href = '/Reserva';
    }

    return(
        <div>
            <h1 className={estilos.tittle}>RESERVAS</h1>
            <Container>
                <br />
                <Button color="primary" onClick={insertar}>NUEVA RESERVA</Button>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Usuario</th>
                            <th>Direccion QRcode</th>
                            <th>codigo de reserva</th>
                            <th>ID pelicula</th>
                            <th>Butacas Reservadas</th>
                            <th>Fecha de Reserva</th>
                        </tr>
                    </thead>

                      <tbody>

                         {infoReservas.map(dato => (
                            <tr key={dato.id_reserva}>
                                <td>{dato.id_reserva}</td>
                                <td>{dato.id_usuario_f}</td>
                                <td>{dato.dir_qr}</td>
                                <td>{dato.codigo_de_reserva}</td>{/* codigo de reserva */}
                                <td>{dato.id_pelicula_cart_f}</td>
                                <td>{dato.butacas_reservadas}</td>
                                <td>{dato.fecha_reserv}</td>
                                <td>
                                    <Button color="primary" onClick={() => mostrarActualizar(dato)}>Editar Butacas</Button>
                                    <Button color="danger" onClick={()=> eliminar(dato)}>Cancelar Reserva</Button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={state.modalActualizar}>
                <ModalHeader>
                <div><h3>EDITAR BUTACAS</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Nota: Asegurarse de que las butacas reemplazantes no esten ocupadas, debe digitar las butacas en mayusculas sin espacios y separados por comas.</label>
                    </FormGroup>

                    <FormGroup>
                        <label>Butacas: </label>
                        <input
                            className="form-control"
                            name="butacas_reservadas"
                            type="text" 
                            value={state.form.butacas_reservadas}
                            placeholder='Ej: B2,B3,B4'
                            onChange={handleChange}/>
                    </FormGroup>


                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => Actualizar(state.form)}>Modificar</Button>
                    <Button className="btn btn-danger" onClick={() => cerrarModalActualizar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}