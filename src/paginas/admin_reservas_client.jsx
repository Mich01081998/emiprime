import estilos from "../css/peliculasGrid.module.css"
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
import {ApiUrl} from '../servicios/API_rest'
import axios from "axios";

export function ReservasUsuario({infoReservas}){

    //const [usuarios, setUsuarios] = useState({info: infoUsuarios});
    const [state, setState] = useState({
        modalActualizar: false,
        getinfo_flag: true,
        form: {
            id_reserva:"",
            pelicula:"",
            fecha_pelicula:"",
            butacas_reservadas:"",
            fecha_reserva:"",
            estado: false,
        },
    })
    var flag = true;

    const mostrarActualizar = (dato) => {
        //console.log(dato)
        setState({
            data: state.data,
          form: dato,
          modalActualizar: true,
        });
        localStorage.setItem('But_a_modf', dato.butacas_reservadas);
    };

    const handleChange = (e) => {
        setState({
            data: state.data,
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
                window.location.href = '/reservas tablero infor macion';
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
                    window.location.href = '/reservas tablero infor macion';
                }else{
                    window.alert('ERROR AL MODIFICAR LAS BUATACA(S): ' + response.data.butacas_reservadas.toString())
                }
            }).catch(error =>{
                window.alert('ERROR AL MODIFICAR: ', error)
            })
        }
    
    };

    const cerrarModalActualizar = () => {
        console.log(state.form)
        setState({
            data: state.data,
            form: {
                id_reserva:"",
                pelicula:"",
                fecha_pelicula:"",
                butacas_reservadas:"",
                fecha_reserva:"",
                estado: false,
            },
            modalActualizar: false });
            localStorage.removeItem('But_a_modf')
    };

    const getInfo = async () => {
        // URI DEL CANAL DE CONEXION
        let url = ApiUrl + 'info/reserva/cliente';
        if(flag){
            flag = false;
            await axios.post(url, {'usuario': localStorage.getItem("infoLogin")})
            .then( (response) => {
                setState({
                    'data': response.data.reservas,
                    form: {
                        id_reserva:"",
                        pelicula:"",
                        fecha_pelicula:"",
                        butacas_reservadas:"",
                        fecha_reserva:"",
                        estado: false,
                    }
                })
            })
        }
    }

    useEffect(() => {
        getInfo();
    }, [])

    return(
        <div>
            <h1 className={estilos.tittle}>RESERVAS</h1>
            {typeof state.data === 'undefined' ? (
                <p>Cargando reservas...</p>
            ):(<>
            <Container>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            <th>ID Reserva</th>
                            <th>Detalles de la Pelicula</th>
                            <th>Fecha de la Funcion</th>
                            <th>Butacas Reservadas</th>
                            <th>Fecha de Reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.data.map(dato => (
                    <tr key={dato.id_reserva}>
                        <td>{dato.id_reserva}</td>
                        <td>{dato.pelicula}</td>
                        <td>{dato.fecha_pelicula}</td>
                        <td>{dato.butacas_reservadas}</td>
                        <td>{dato.fecha_reserva}</td>
                        {dato.estado === true &&
                            <td>
                            <Button color="primary" onClick={() => mostrarActualizar(dato)}>Editar Butacas</Button>
                            <Button color="danger" onClick={()=> eliminar(dato)}>Cancelar Reserva</Button>
                            </td>
                        }
                        
                            
                        
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
            </>)}
        </div>
    );
}