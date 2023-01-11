import React from 'react';

import '../css/usuarios.css'
import {ApiUrl} from '../servicios/API_rest'
import axios from 'axios'
import { Redirect, Switch } from 'react-router-dom';

class LoginPage extends React.Component{

    constructor(props){
        super(props); 
    }

    state = {
    form: {
        "correo_electronico": "",
        "password_usr": ""
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

    manejadorBoton = () =>{ // CONTROL DEL EVENTO CLICK EN BOTON "INICIO DE SESION"
        // let history = useHistory();

        let url = ApiUrl + "login";
        axios.post(url, this.state.form)
        .then( response =>{
            if(response.data.datos === 'ERROR'){
                this.setState({
                    error : true,
                    errorMsg : response.data.error
                })
            }
            
            else{
                console.log(response)
                //console.log(response.data);
                localStorage.setItem('infoLogin', JSON.stringify(response.data));
                //this.props.history.push("/")
                window.alert("INICIO DE SESION EXITOSO")
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
                            <h1>INICIO DE SESION</h1>
                        </div>
                        <br />
                        <form onSubmit={this.manejadorSubmit}>
                            <input type="email" id="login" className="fadeIn second" name="correo_electronico" placeholder="Correo Electronico" onChange={this.manejadorChange}/>
                            <input type="password" id="password" className="fadeIn third" name="password_usr" placeholder="Contraseña" onChange={this.manejadorChange}/>
                            <input type="submit" className="fadeIn fourth" value="INICIAR SESION" onClick={this.manejadorBoton}/>
                            <div id="formRegister"> <a className="underlineHover" href="#RecuperarContraseña">¿No recuerdas tu contraseña?</a> </div>
                            <h3></h3>
                        </form>

                        <div id="formFooter">
                            {this.state.error === true &&
                                <div className='alert alert-danger' role='alert'>
                                    {this.state.errorMsg === 'ERROR, CUENTA NO ACTIVADA' ?
                                        <>
                                        {this.state.errorMsg}
                                        <br></br>
                                        <a className="underlineHover" href="/login/activar cuenta">Activar Cuenta</a>
                                        </>
                                        :this.state.errorMsg
                                    }
                                    
                                </div>
                            }
                            <a className="underlineHover" href="/registrarse">Registrarse</a>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default LoginPage