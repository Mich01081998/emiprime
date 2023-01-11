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

export function PeliculasCrud({infoPeliculas}){

    //const [usuarios, setUsuarios] = useState({info: infoPeliculas});
    const [state, setState] = useState({
        data: infoPeliculas,
        modalActualizar: false,
        modalInsertar: false,

        form: {
            id_peliculas:"",
            nombre:"",
            descripcion:"",
            desc_sonido:"",
            desc_lenguaje:"",
            desc_visualizacion:"",
            link_trailer:"",
            img_dir:"",
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
                id_peliculas:"",
                nombre:"",
                descripcion:"",
                desc_sonido:"",
                desc_lenguaje:"",
                desc_visualizacion:"",
                link_trailer:"",
                img_dir:"",
            },
            modalActualizar: false });
    };

    const mostrarModalInsertar = () => {
        setState({
            form: {
                id_peliculas:"",
                nombre:"",
                descripcion:"",
                desc_sonido:"",
                desc_lenguaje:"",
                desc_visualizacion:"",
                link_trailer:"",
                img_dir:"",
            },
            modalInsertar: true,
        });
        console.log('MODAL INSERTAR ABIERTO')
    };

    const cerrarModalInsertar = () => {
        setState({ 
            form: {
                id_peliculas:"",
                nombre:"",
                descripcion:"",
                desc_sonido:"",
                desc_lenguaje:"",
                desc_visualizacion:"",
                link_trailer:"",
                img_dir:"",
            },
            modalInsertar: false });
        console.log('MODAL INSERTAR CERRADO')
    };

    // COSAS DE PRUEBA****************
    //*********************************

    const editar = (dato) => {
        var url = ApiUrl + 'crud/consult'
        const list = [
            "update pelicula set nombre='"+ dato.nombre +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set descripcion='"+ dato.descripcion +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set desc_sonido='"+ dato.desc_sonido +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set desc_lenguaje='"+ dato.desc_lenguaje +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set desc_visualizacion='"+ dato.desc_visualizacion +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set link_trailer='"+ dato.link_trailer +"' where id_peliculas= " + dato.id_peliculas +" ;",
            "update pelicula set img_dir='"+ dato.img_dir +"' where id_peliculas= " + dato.id_peliculas +" ;",
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
        var opcion = window.confirm("¿Desea eliminar registro de: "+dato.nombre+"?");
        if (opcion == true) {
            const consulta = 'delete from pelicula where id_peliculas='+ dato.id_peliculas +';'
            axios.post(url, {consulta: consulta})
            .then( (response) => {
                console.log(response)
                window.alert('ELIMINADO CORRECTAMENTE')
                window.location.href = '/admin/crud adminis tracion';
            }).catch(error =>{
                window.alert('ERROR AL ELIMINAR: ', error)
            })
        }
        console.log(infoPeliculas)
    };
    const insertar= ()=>{
        console.log(state.form)
        var url = ApiUrl + 'crud/consult'
        const consulta = 
        "INSERT INTO pelicula (nombre, descripcion, desc_sonido, desc_lenguaje, desc_visualizacion, link_trailer,img_dir)"+
        "VALUES ('" + state.form.nombre + "', "+
        "'"+state.form.descripcion + "', "+
        "'"+state.form.desc_sonido + "', "+
        "'"+state.form.desc_lenguaje + "', "+
        "'"+state.form.desc_visualizacion + "', "+
        "'"+state.form.link_trailer + "', "+
        "'"+state.form.img_dir + "');"
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

    return(
        <div>
            <h1 className={estilos.tittle}>PELICULAS</h1>
            <Container>
                <br />
                <Button color="primary" onClick={mostrarModalInsertar}>NUEVO REGISTRO</Button>
                <br />
                <br />
                <Table hover>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Sonido</th>
                            <th>Lenguaje</th>
                            <th>Visualización</th>
                            <th>Link Trailer</th>
                            <th>Imgen</th>
                        </tr>
                    </thead>

                      <tbody>

                         {infoPeliculas.map(dato => (
                            <tr key={dato.id_usuario}>
                                

                                {/* <td>{dato.id_pelicula}</td> */}
                                <td>{dato.nombre}</td>
                                <td>{dato.descripcion}</td>
                                <td>{dato.desc_sonido}</td>
                                <td>{dato.desc_lenguaje}</td>
                                <td>{dato.desc_visualizacion}</td>
                                <td>{dato.link_trailer}</td>
                                <td>{dato.img_dir}</td>
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
                        <label>Nombre: </label>
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            onChange={handleChange}
                            value={state.form.nombre}/>
                    </FormGroup>


                    <FormGroup>
                        <label>Descripción: </label>
                        <input
                            className="form-control"
                            name="descripcion"
                            type="text"
                            onChange={handleChange}
                            value={state.form.descripcion}/>
                    </FormGroup>
                    <FormGroup>
                        <label>Sonido: </label>
                        <input
                            className="form-control"
                            name="desc_sonido"
                            type="text"
                            onChange={handleChange}
                            value={state.form.desc_sonido}/>
                    </FormGroup>

                    

                    <FormGroup>
                        <label>Lenguaje: </label>
                        <input
                            className="form-control"
                            name="desc_lenguaje"
                            type="text"
                            onChange={handleChange}
                            value={state.form.desc_lenguaje}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Visualización: </label>
                        <input
                            className="form-control"
                            name="desc_visualizacion"
                            type="text"
                            onChange={handleChange}
                            value={state.form.desc_visualizacion}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Link Trailer: </label>
                        <input
                            className="form-control"
                            name="link_trailer"
                            type="text"
                            onChange={handleChange}
                            value={state.form.link_trailer}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen: </label>
                        <input
                            className="form-control"
                            name="img_dir"
                            type="text"
                            onChange={handleChange}
                            value={state.form.img_dir}/>
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
                        <label>Nombre: </label>
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>


                    <FormGroup>
                        <label>Descripción: </label>
                        <input
                            className="form-control"
                            name="descripcion"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>
                    <FormGroup>
                        <label>Sonido: </label>
                        <input
                            className="form-control"
                            name="desc_sonido"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    

                    <FormGroup>
                        <label>Lenguaje: </label>
                        <input
                            className="form-control"
                            name="desc_lenguaje"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Visualización: </label>
                        <input
                            className="form-control"
                            name="desc_visualizacion"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Link Trailer: </label>
                        <input
                            className="form-control"
                            name="link_trailer"
                            type="text"
                            onChange={handleChangeInsertar}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen: </label>
                        <input
                            className="form-control"
                            name="img_dir"
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