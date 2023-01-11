import React from 'react';

import '../css/usuarios.css'
import {ApiUrl} from '../servicios/API_rest'
import axios from 'axios'
import { Redirect, Switch } from 'react-router-dom';

class ActivarCuenta extends React.Component{
    
    constructor(props){
        super(props);
    }

    state = {
    form: {
        "correo_electronico": "",
        "codigo": ""
    },error: false,
    errorMsg:""
    }

    manejadorSubmit = e =>{
        e.preventDefault();
    }

    manejadorChange = async e  => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        this.setState({
            error : false,
            errorMsg : ''
        })
    }

    manejadorBoton = () =>{ // CONTROL DEL EVENTO CLICK EN BOTON "INICIO"
        // let history = useHistory();
        
        let url = ApiUrl + "login/activacion";
        axios.post(url, this.state.form)
        .then( response =>{
            if(response.data.datos === 'ERROR'){
                //console.log("no OK / " + response.status)
                //console.log(response)
                this.setState({
                    error : true,
                    errorMsg : response.data.error
                })
            }
            else{
                console.log(response)
                //console.log(response.data);
                localStorage.setItem('infoLogin', JSON.stringify(response.data));
                window.alert("SE ACTIVO CORRECTAMENTE, INICIO DE SESION EXITOSO")
                window.location.href = '/';
            }
        }).catch(error =>{
            console.log(error)
            this.setState({
                error : true,
                errorMsg : 'ERROR EN EL SISTEMA'
            })
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br />
                        <div className="fadeIn first">
                            <h1>ACTIVACION DE CUENTA</h1>
                        </div>
                        <br />
                        <form onSubmit={this.manejadorSubmit}>
                            <input type="email" id="login" className="fadeIn second" name="correo_electronico" placeholder="Correo Electronico" onChange={this.manejadorChange}/>
                            <input type="text" id="code" className="fadeIn third" name="codigo" placeholder="Codigo de activación" onChange={this.manejadorChange}/>
                            <input type="submit" className="fadeIn fourth" value="ACTIVAR" onClick={this.manejadorBoton}/>
                            

                            {/* <div id="formRegister"> <a className="underlineHover" href="#RecuperarContraseña">¿No recuerdas tu contraseña?</a> </div> */}
                            
                            <h3></h3>
                        </form>

                        <div id="formFooter">
                            {this.state.error === true &&
                                <div className='alert alert-danger' role='alert'>
                                    {this.state.errorMsg}
                                </div>
                            }
                            <a className="underlineHover" href="/login">Volver al inicio de sesión</a>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ActivarCuenta