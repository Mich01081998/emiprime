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

export function UsuariosCrud({infoUsuarios}){

    //const [usuarios, setUsuarios] = useState({info: infoUsuarios});
    const [state, setState] = useState({
        data: infoUsuarios,
        modalActualizar: false,
        modalInsertar: false,

        form: {
            id_usuario:"",
            user_name:"",
            password_usr:"",
            nombres:"",
            apellido_paterno:"",
            apellido_materno:"",
            correo_electronico:"",
            cuenta_state:"",
            nit:"",
            razon_social:"",
            user_rol:"",
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
                id_usuario:"",
                user_name:"",
                password_usr:"",
                nombres:"",
                apellido_paterno:"",
                apellido_materno:"",
                correo_electronico:"",
                cuenta_state:"",
                nit:"",
                razon_social:"",
                user_rol:"",
            },
            modalActualizar: false });
    };

    const mostrarModalInsertar = () => {
        setState({
            form: {
                id_usuario:"",
                user_name:"",
                password_usr:"",
                nombres:"",
                apellido_paterno:"",
                apellido_materno:"",
                correo_electronico:"",
                cuenta_state:"",
                nit:"",
                razon_social:"",
                user_rol:"",
            },
            modalInsertar: true,
        });
        console.log('MODAL INSERTAR ABIERTO')
    };

    const cerrarModalInsertar = () => {
        setState({ 
            form: {
                id_usuario:"",
                user_name:"",
                password_usr:"",
                nombres:"",
                apellido_paterno:"",
                apellido_materno:"",
                correo_electronico:"",
                cuenta_state:"",
                nit:"",
                razon_social:"",
                user_rol:"",
            },
            modalInsertar: false });
        console.log('MODAL INSERTAR CERRADO')
    };

    // COSAS DE PRUEBA****************
    const mostrarAlgo = (algo) =>{
        console.log('ALGO ', algo)
    }

    const nadaa = () => {
        infoUsuarios[2].user_name = 'FAFAFA'
        console.log(infoUsuarios)
         for(let i = 0; i < infoUsuarios.length; i++) {
             console.log('nada nada nada', infoUsuarios[i])
        }

    }
    //*********************************

    const editar = (dato) => {
        var url = ApiUrl + 'crud/consult'
        const list = [
            "update usuario set user_name='"+ dato.user_name +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set password_usr='"+ dato.password_usr +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set nombres='"+ dato.nombres +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set apellido_paterno='"+ dato.apellido_paterno +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set apellido_materno='"+ dato.apellido_materno +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set correo_electronico='"+ dato.correo_electronico +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set cuenta_state='"+ dato.cuenta_state +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set nit='"+ dato.nit +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set razon_social='"+ dato.razon_social +"' where id_usuario= " + dato.id_usuario +" ;",
            "update usuario set user_rol='"+ dato.user_rol +"' where id_usuario= " + dato.id_usuario +" ;",
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

/* 
        var contador = 0;
        var arreglo = infoUsuarios;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].personaje = dato.personaje;
            arreglo[contador].anime = dato.anime;
          }
          contador++;
        });
        infoUsuarios = arreglo;
         */
        //setState({ data: arreglo, modalActualizar: false });
    };

    const eliminar = (dato) => {
        var url = ApiUrl + 'crud/consult'
        var opcion = window.confirm("¿Desea eliminar registro de: "+dato.user_name+"?");
        if (opcion == true) {
            const consulta = 'delete from usuario where id_usuario='+ dato.id_usuario +';'
            axios.post(url, {consulta: consulta})
            .then( (response) => {
                console.log(response)
                window.alert('ELIMINADO CORRECTAMENTE')
                window.location.href = '/admin/crud adminis tracion';
            }).catch(error =>{
                window.alert('ERROR AL ELIMINAR: ', error)
            })
            //
            /* var contador = 0;
            var arreglo = [];
            infoUsuarios.map((registro) => {
                if (dato.id_usuario != registro.id_usuario) {
                    arreglo.push(registro);
                    console.log(registro)
                }
            contador++;
            });
            infoUsuarios = arreglo;
            setState({
            form: {
                id_usuario:"",
                user_name:"",
                password_usr:"",
                nombres:"",
                apellido_paterno:"",
                apellido_materno:"",
                correo_electronico:"",
                cuenta_state:"",
                nit:"",
                razon_social:"",
                user_rol:"",
            }}); */
        }
        console.log(infoUsuarios)
    };

    const insertar= ()=>{
        console.log(state.form)
        var url = ApiUrl + 'crud/consult'
        const consulta = "INSERT INTO usuario (user_name, password_usr, nombres, apellido_paterno, apellido_materno, correo_electronico,cuenta_state, nit, razon_social, user_rol)"+
        "VALUES ('" + state.form.user_name + "', "+
        "'"+state.form.password_usr + "', "+
        "'"+state.form.nombres + "', "+
        "'"+state.form.apellido_paterno + "', "+
        "'"+state.form.apellido_materno + "', "+
        "'"+state.form.correo_electronico + "', "+
        "'"+state.form.cuenta_state + "', "+
        "'"+state.form.nit + "', "+
        "'"+state.form.razon_social + "', "+
        "'"+state.form.user_rol + "')"
        console.log(consulta)
        
        axios.post(url, {consulta: consulta})
        .then( (response) => {
            console.log(response)
            window.alert('INSERTADO CORRECTAMENTE')
            window.location.href = '/admin/crud adminis tracion';
        }).catch(error =>{
            window.alert('ERROR AL INSERTAR: ', error)
        })


/*         var valorNuevo = {...state.form};
        //valorNuevo.id=this.state.data.length+1;
        var lista= infoUsuarios;
        lista.push(valorNuevo);
        infoUsuarios = lista;
        console.log(infoUsuarios)
        setState({ 
            form: {
                id_usuario:"",
                user_name:"",
                password_usr:"",
                nombres:"",
                apellido_paterno:"",
                apellido_materno:"",
                correo_electronico:"",
                cuenta_state:"",
                nit:"",
                razon_social:"",
                user_rol:"",
            },
            smodalInsertar: false});
             */
    }

    const getInfo = async () => {
        console.log('LISTA:  ',infoUsuarios);
    }

    useEffect(() => {
        getInfo();
    }, [])

    return(
        <div>
            <h1 className={estilos.tittle}>USUARIOS</h1>
            <Container>
                <br />
                <Button color="primary" onClick={mostrarModalInsertar}>NUEVO USUARIO</Button>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>User Name</th>
                            <th>Constraseña</th>
                            <th>Nombres</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Correo Electronico</th>
                            <th>Estado de cuenta</th>
                            <th>NIT</th>
                            <th>Razon Social</th>
                            <th>Rol de usuario</th>
                        </tr>
                    </thead>

                      <tbody>

                         {infoUsuarios.map(dato => (
                            <tr key={dato.id_usuario}>
                                
                                {/* <td>{dato.id_usuario}</td> */}
                                <td>{dato.user_name}</td>
                                <td>{dato.password_usr}</td>
                                <td>{dato.nombres}</td>
                                <td>{dato.apellido_paterno}</td>
                                <td>{dato.apellido_materno}</td>
                                <td>{dato.correo_electronico}</td>
                                <td>{dato.cuenta_state}</td>
                                <td>{dato.nit}</td>
                                <td>{dato.razon_social}</td>
                                <td>{dato.user_rol}</td>
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
                        <label>User Name: </label>
                        <input
                            className="form-control"
                            name="user_name"
                            type="text"
                            onChange={handleChange}
                            value={state.form.user_name}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Constraseña: </label>
                        <input
                            className="form-control"
                            name="password_usr"
                            type="text"
                            onChange={handleChange}
                            value={state.form.password_usr}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Nombres: </label>
                        <input
                            className="form-control"
                            name="nombres"
                            type="text"
                            onChange={handleChange}
                            value={state.form.nombres}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido materno: </label>
                        <input
                            className="form-control"
                            name="apellido_materno"
                            type="text"
                            onChange={handleChange}
                            value={state.form.apellido_materno}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido paterno: </label>
                        <input
                            className="form-control"
                            name="apellido_paterno"
                            type="text"
                            onChange={handleChange}
                            value={state.form.apellido_paterno}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Correo Electronico: </label>
                        <input
                            className="form-control"
                            name="correo_electronico"
                            type="text"
                            onChange={handleChange}
                            value={state.form.correo_electronico}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Estado de cuenta: </label>
                        <input
                            className="form-control"
                            name="cuenta_state"
                            type="text"
                            onChange={handleChange}
                            value={state.form.cuenta_state}/>
                    </FormGroup>

                    <FormGroup>
                        <label>NIT: </label>
                        <input
                            className="form-control"
                            name="nit"
                            type="text"
                            onChange={handleChange}
                            value={state.form.nit}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Razon social: </label>
                        <input
                            className="form-control"
                            name="razon_social"
                            type="text"
                            onChange={handleChange}
                            value={state.form.razon_social}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Rol de la cuenta: </label>
                        <input
                            className="form-control"
                            name="user_rol"
                            type="text"
                            onChange={handleChange}
                            value={state.form.user_rol}/>
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button
                    color="primary"
                    onClick={() => editar(state.form)}
                    >
                    Editar
                    </Button>
                    <Button color="danger" onClick={() => cerrarModalActualizar()}>Cancelar</Button>

                </ModalFooter>
            </Modal>

            <Modal isOpen={state.modalInsertar}>
                <ModalHeader>
                <div><h3>Insertar</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>User Name: </label>
                        <input
                            className="form-control"
                            name="user_name"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Constraseña: </label>
                        <input
                            className="form-control"
                            name="password_usr"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Nombres: </label>
                        <input
                            className="form-control"
                            name="nombres"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido materno: </label>
                        <input
                            className="form-control"
                            name="apellido_materno"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Apellido paterno: </label>
                        <input
                            className="form-control"
                            name="apellido_paterno"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Correo Electronico: </label>
                        <input
                            className="form-control"
                            name="correo_electronico"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Estado de cuenta: </label>
                        <input
                            className="form-control"
                            name="cuenta_state"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>NIT: </label>
                        <input
                            className="form-control"
                            name="nit"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Razon social: </label>
                        <input
                            className="form-control"
                            name="razon_social"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Rol de la cuenta: </label>
                        <input
                            className="form-control"
                            name="user_rol"
                            type="text"
                            onChange={handleChangeInsertar}/>
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