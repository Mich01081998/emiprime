import React from 'react';
import '../../css/cruds/usuarios.crud.css'
import {ApiUrl} from '../../servicios/API_rest'
import axios from 'axios'
import { Nav,  Navbar, Container, Button, NavDropdown } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import {UsuariosCrud} from './usuarios.crud'
import {PeliculasCrud} from './peliculas.crud'
import {CartelerasCrud} from './carteleras.crud'
import {PeliculaFuncionCrud} from './peliculas_funcion.crud'
import {ReservasCrud} from './reservas.crud'

class CrudUsuarios extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
    form: {
        "correo_electronico": "",
        "password_usr": ""
    },error: false,
    cuenta_admin: 0,
    radioValue: 1,
    radios: 
    [
        { name: 'USUARIOS', value: '1', consulta: 'Select* from usuario'},
        { name: 'PELICULAS', value: '2', consulta: 'Select* from pelicula' },
        { name: 'CARTELERA', value: '3', consulta: 'Select* from cartelera' },
        { name: 'PELICULA EN CARTELERA', value: '4', consulta: 'varios' },
        { name: 'RESERVAS', value: '5', consulta: 'select* from reserva' },
    ],
    consulta: [],
    consultaVarios: [],

    sala: [],
    pelicula: [],
    cartelera: [],

    'USUARIOS': false,
    'PELICULAS': false,
    'CARTELERA': false,
    'PELICULA EN CARTELERA': false,
    'RESERVAS': false, 
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

    manejadorBoton = async (e, value) =>{
        //const delay = promisify(setTimeout);
        var url = ApiUrl + "crud/consult"
/*         await axios.post(url, {consulta: this.state.radios[e.target.value-1].consulta})
        .then( (response) => {
            console.log(response.data.rows)
            this.setState({consulta: response.data.rows})
            //this.setState({radioValue: e.currentTarget.value})
            this.setState({['USUARIOS']: false})
            this.setState({['PELICULAS']: false})
            this.setState({['CARTELERA']: false})
            this.setState({['PELICULA EN CARTELERA']: false})
            this.setState({['RESERVAS']: false})
            //console.log(this.setState({[value]: true}))
            this.setState({[value]: true})
        }) */
        
        console.log(this.state.radios[e.target.value-1].consulta)
         if(this.state.radios[e.target.value-1].consulta == 'varios'){
            this.setState({consultaVarios: []})
            const list = []
            var response = [];
            console.log('INGRESO A VARIAS CONSULTAS')
            //paso 1: obtener informacion de las peliculas carteleras puro ID
            await axios.post(url, {consulta: "SELECT* FROM peliculas_cartelera;"})
            .then( (response0) => {
                console.log(response0.data.rows.length)

                //se guardan los IDs de la tabla
                this.setState({consulta: response0.data.rows})
                response = response0;
            })
                if(response.data.rows.length === 0){
                    this.state.consultaVarios.push({
                        'id_pelicula_cart': '',
                        'descripcion_cart': '',
                        'horario': '',
                        'sala': '',
                        'nombre_peli': '',
                        'tiempo_reserva': ''
                    })
                
                        this.setState({['USUARIOS']: false})
                        this.setState({['PELICULAS']: false})
                        this.setState({['CARTELERA']: false})
                        this.setState({['PELICULA EN CARTELERA']: false})
                        this.setState({['RESERVAS']: false})
                        
                        this.setState({[value]: true})
                        
                    
                }
                //paso 2: recorrer los registros para obtener de cada ID una descripcion
                for (let i = 0; i < response.data.rows.length; i++) {
                    
                    var element = response.data.rows[i];

                    var id_pelicula_cart = element.id_pelicula_cart || 'null';
                    
                    var horario = element.horario || 'null';
                    var descripcion_cart = '';
                    var sala = '';
                    var nombre_peli = '';
                    var tiempo_reserva = element.tiempo_reserva || 'null';
                    var precio_butacas = element.precio_butacas || 'null';

                    // paso 3: obtener descripcion de ID de la cartelera
                    await axios.post(url, {consulta: "SELECT* FROM cartelera where id_cartelera= " + element.id_cartelera_f})
                    .then( (response2) => {
                        if(response2.data.rows.length > 0)
                            descripcion_cart = response2.data.rows[0].descripcion_cart;
                        else
                            descripcion_cart = 'null';
                    })

                    // paso 4: obtener descripcion de ID de las butacas_funcion
                    await axios.post(url, {consulta: "SELECT* FROM butacas_funcion where id_butacas_funcion= " + element.id_butacas_f})
                    .then( (response3) => {
                        if(response3.data.rows.length > 0)
                            sala = response3.data.rows[0].id_sala_f;
                        else
                            sala = 'null';
                    })

                    // paso 5: obtener descripcion de ID de las peliculas
                    await axios.post(url, {consulta: "Select* from pelicula where id_peliculas= " + element.id_pelicula_f})
                    .then( async (response3) => {
                        if(response3.data.rows.length > 0)
                            nombre_peli = response3.data.rows[0].nombre + ' - ' + response3.data.rows[0].desc_visualizacion +' ' + response3.data.rows[0].desc_lenguaje +' ' + response3.data.rows[0].desc_sonido; // wdddddddddddddddddd
                        else
                            nombre_peli = 'null'
                    })

                    this.state.consultaVarios.push({
                        'id_pelicula_cart': id_pelicula_cart,
                        'descripcion_cart': descripcion_cart,
                        'horario': horario,
                        'sala': sala,
                        'nombre_peli': nombre_peli,
                        'tiempo_reserva': tiempo_reserva,
                        'precio_butacas': precio_butacas
                    })
                    
                    if(i == response.data.rows.length-1){
                        this.setState({['USUARIOS']: false})
                        this.setState({['PELICULAS']: false})
                        this.setState({['CARTELERA']: false})
                        this.setState({['PELICULA EN CARTELERA']: false})
                        this.setState({['RESERVAS']: false})
                        
                        this.setState({[value]: true})
                        
                    }
                }
                
                var url = ApiUrl + "crud/consult"

                // SALAS
                await axios.post(url, {consulta: "SELECT * FROM sala"})
                .then( (response3) => {
                    console.log(response3.data.rows)
                    response3.data.rows.forEach(element => {
                        this.state.sala.push({'id_sala': element.id_sala, 'descripcion_sala': element.descripcion_sala})
                    });
                })

                // CARTELERAS
                var today = new Date()
                var targetDate = new Date("12/31/2022") //use full year
                var dda = Math.floor(( today.getTime() - targetDate.getTime()) / 86400000 +365)
                await axios.post(url, {consulta: "SELECT* FROM cartelera WHERE dia_del_ao >= "+dda+" ORDER BY dia_del_ao ASC;"})
                .then( (response3) => {
                    console.log(response3.data.rows)
                    response3.data.rows.forEach(element => {
                        this.state.cartelera.push({'id_cartelera': element.id_cartelera, 'descripcion_cart': element.descripcion_cart})
                    });
                })
                // PELICULAS
                await axios.post(url, {consulta: "SELECT * FROM pelicula"})
                .then( (response3) => {
                    console.log(response3.data.rows)
                    response3.data.rows.forEach(element => {
                        this.state.pelicula.push({'id_peliculas': element.id_peliculas, 'nombre': (element.nombre + ' - ' + element.desc_visualizacion +' ' + element.desc_lenguaje +' ' + element.desc_sonido)})
                    });
                })

                console.log('Pelis: ', this.state.consultaVarios);
                //console.log('LISTA: ',list);

        }else{
            axios.post(url, {consulta: this.state.radios[e.target.value-1].consulta})
            .then( (response) => {
                console.log(response.data.rows)
                this.setState({consulta: response.data.rows})
                //this.setState({radioValue: e.currentTarget.value})
                this.setState({['USUARIOS']: false})
                this.setState({['PELICULAS']: false})
                this.setState({['CARTELERA']: false})
                this.setState({['PELICULA EN CARTELERA']: false})
                this.setState({['RESERVAS']: false})
                //console.log(this.setState({[value]: true}))
                this.setState({[value]: true})
            })
        }
    }

    verificarAdmin = () =>{ 
        // let history = useHistory();
        console.log(JSON.parse(localStorage.getItem('infoLogin')).datos.user_rol)
        if(JSON.parse(localStorage.getItem('infoLogin')).datos.user_rol == 'admin')
            this.setState({cuenta_admin: 1})
        else
            this.setState({cuenta_admin: 2})
    }

    render(){ 

        return (
            <>
            {this.state.cuenta_admin === 0 &&
            <div className='button_editar'> <Button variant="success" onClick={this.verificarAdmin}>EDITAR?</Button> </div> }        

            {this.state.cuenta_admin === 1 &&
                
                <div className='button_editar'>
                <ButtonGroup>
                    {this.state.radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={this.state.radioValue === this.state.radios.value}
                        onChange={e =>{this.manejadorBoton(e,radio.name)}}>
                    {radio.name}
                    </ToggleButton>
                    ))
                    }
                </ButtonGroup>
                </div>
            }
            {this.state.cuenta_admin === 2 &&
                <div className='no_admin_message'>
                    <h1 className='no_admin_message'>USTED NO PUEDE ADMINISTRAR ESTA PAGINA</h1>
                </div>
            }
            
            {this.state['USUARIOS'] === true &&
                <div>
                    <UsuariosCrud infoUsuarios={this.state.consulta}></UsuariosCrud>
                </div>
            }
            {this.state['RESERVAS'] &&
                <div>
                    <ReservasCrud infoReservas={this.state.consulta}></ReservasCrud>
                </div>
            }
            {this.state['PELICULAS'] &&
                <div>
                    <PeliculasCrud infoPeliculas={this.state.consulta}></PeliculasCrud>
                </div>
/* 
                typeof this.state.consulta === 'undefined' ? (
                    <p>Loading...</p>
                ):(

                ) */
            }
            {this.state['PELICULA EN CARTELERA'] &&
                <div>
                    <PeliculaFuncionCrud infoCarteleras={this.state.consulta} infoFuncionesNombres={this.state.consultaVarios} peliculas={this.state.pelicula} carteleras_info={this.state.cartelera} salas={this.state.sala}></PeliculaFuncionCrud>
                </div>

/*                 typeof this.state.consulta === 'undefined' ? (
                    <p>Loading...</p>
                ):(

                ) */
            }
            {this.state['CARTELERA'] &&
                <div>
                    <CartelerasCrud infoCarteleras={this.state.consulta}></CartelerasCrud>
                </div>
            }
            
            </>
        );
    }
}
export default CrudUsuarios