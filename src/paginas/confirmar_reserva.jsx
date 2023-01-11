import React from 'react';
import '../css/usuarios.css'
import {ApiUrl} from '../servicios/API_rest'
import axios from 'axios'

class ConfirmarReserva extends React.Component{

    constructor(props){
        super(props);
    }

    //const [Qr, setQr] = useState({fragmento_HTML: ``});

    state = {
        form: {
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

    manejadorBoton = () =>{ // CONTROL DEL EVENTO CLICK EN BOTON "INICIO DE SESION"
        // let history = useHistory();
        
        let url = ApiUrl + "reserva/confirmar";
        axios.post(url, this.state.form)
        .then( response =>{
            if(response.data.msg === 'ERROR'){
                this.setState({
                    error : true,
                    errorMsg : 'ERROR EN LA CONFIRMACION, VERIFICA QUE EL CODIGO SEA EL CORRECTO O VERIFICA QUE LA RESERVA AUN SIGA EXISTIENDO'
                })
            }else{
                console.log(response)
                window.alert("CONFIRMACION EXITOSA")
                window.location.href = '/admin/confirmar reserva de butacas';
            }
        }).catch(error =>{
            console.log(error)
            this.setState({
                error : true,
                errorMsg : 'ERROR EN LA CONFIRMACION, VERIFICA QUE EL CODIGO SEA EL CORRECTO O VERIFICA QUE LA RESERVA AUN SIGA EXISTIENDO'
            })
        })
    }

    render(){
        return(
            <>
            <React.Fragment>
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <br />
                            <div className="fadeIn first">
                                <h1>CONFIRMACION DE RESERVAS</h1>
                            </div>
                            <br />
                            <form onSubmit={this.manejadorSubmit}>
                            
                                <input type="text" id="codigo" className="fadeIn second" name="codigo" placeholder="Digite el codigo de reserva" onChange={this.manejadorChange}/>
                                <input type="submit" className="fadeIn fourth" value="CONFIRMAR RESERVA" onClick={this.manejadorBoton}/>

                                <div id="formRegister"> <a className="underlineHover" href="/admin/crud adminis tracion">Verificar existencia de reserva</a> </div>

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
                                <a className="underlineHover" href="/">¿Desea volver al incio?</a>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            </>
        );
    }
}
export default ConfirmarReserva