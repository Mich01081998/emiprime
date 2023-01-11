import React from 'react';
import '../css/usuarios.css'
import {ApiUrl} from '../servicios/API_rest'
import axios from 'axios'

class RegisterUser extends React.Component{
    
    constructor(props){
        super(props);
    }

    state = {
    form: {
        "correo_electronico": "",
        "password_usr": "",
        "password_us_again": "",
        "user_name": "",
        "nombres": "",
        "apellido_paterno": "",
        "apellido_materno": "",
        "nit": "0",
        "razon_social": "Sin razon social"
    },error: false,
    error_pass: true,
    confirmacion: true,
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

    manejadorPass = async e =>{
        if(this.state.form.password_usr !== e.target.value){
            console.log("entra aca");
            await this.setState({
                error_pass: false,
                error: true,
                errorMsg: "ERROR EN LAS CONTRASEÑAS"
            })
        }
        else{
            await this.setState({
                error_pass: true,
                error: false,
                errorMsg: ""
            })
        }
    }

    manejadorBoton = () =>{ // CONTROL DEL EVENTO CLICK EN BOTON "REGISTRARSE"
        let url = ApiUrl + "registrarse";
        if(this.state.error_pass)
        {
            axios.post(url, this.state.form)
            .then( response =>{
                if(response.data === 'CORREO YA REGISTRADO'){
                    this.setState({
                        error : true,
                        errorMsg : response.data
                    })
                }
                else{
                    this.setState({
                        confirmacion: false
                    })
                }
            }).catch(error =>{
                console.log(error)
                this.setState({
                    error : true,
                    errorMsg : 'ERROR EN EL SISTEMA'
                })
            })
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br />
                        <div className="fadeIn first">
                            <h1>REGISTRO DE USUARIOS</h1>
                        </div>
                        <br />
                        {this.state.confirmacion?    
                        
                        <>  <form onSubmit={this.manejadorSubmit}>
                                <input autocomplete="off" type="text" id="nombre" className="fadeIn second" name="nombres" placeholder="Digite su(s) nombre(s)..." onChange={this.manejadorChange}/>
                                <input autocomplete="off" type="text" id="paterno" className="fadeIn third" name="apellido_paterno" placeholder="Digite su apellido paterno..." onChange={this.manejadorChange}/>
                                <input autocomplete="off" type="text" id="materno" className="fadeIn second" name="apellido_materno" placeholder="Digite tu apellido materno..." onChange={this.manejadorChange}/>
                                <input autocomplete="off" type="email" id="email_" className="fadeIn second" name="correo_electronico" placeholder="Digite su correo Electronico..." onChange={this.manejadorChange}/>
                                <input autocomplete="off" type="password" id="pass" className="fadeIn third" name="password_usr" placeholder="Digite su contraseña..." onChange={this.manejadorChange}/>
                                <input autocomplete="off" type="password" id="pass_again" className="fadeIn third" name="password_us_again" placeholder="Digite su contraseña nuevamente..." onChange={this.manejadorPass}/>
                                <input autocomplete="off" type="text" id="usr_name" className="fadeIn second" name="user_name" placeholder="Digite su nic name..." onChange={this.manejadorChange}/>

                                <input type="submit" className="fadeIn fourth" value="REGISTRARSE" onClick={this.manejadorBoton}/>
                                <div id="formRegister"> <a className="underlineHover" href="/login">Ir al inicio de sesion</a> </div>
                                <h3></h3>
                            </form>

                            <div id="formFooter">
                                {this.state.error &&
                                    <div className='alert alert-danger' role='alert'>
                                        {this.state.errorMsg}
                                    </div>
                                }
                            </div>
                            </>
                            :<>
                            <form>
                                <div className='alert alert-success' role='alert'>
                                    TU CUENTA FUE CREADA CON EXITO
                                </div>
                            </form>
                                <div id="formFooter">
                                    <a className="underlineHover" href="/login">Ir al inicio de sesion</a>
                                </div>
                            </>}

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default RegisterUser