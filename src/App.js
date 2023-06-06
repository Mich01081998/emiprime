//COMPONENTES NECESARIOS
import { NavBar } from "./componentes/navbar.jsx";
import { Footer } from "./componentes/footer.jsx";
import { Volver } from "./paginas/volver.jsx";
//COMPONENTES REACT
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import './css/App.css'
//PAGINAS PARA ENRUTAMIENTO
import { Estrenos } from './componentes/estrenosGrid.jsx';
import { DetallePeliculas } from "./paginas/detalle_peliculas.jsx";
import { Peliculas } from './componentes/peliculasGrid';
import { ReservarButacas } from "./paginas/reservar";
import LoginPage from "./paginas/login.jsx";
import ActivarCuenta from "./paginas/activacion_cuenta";
import { Contactanos } from "./paginas/contactanos.jsx";
import { Nosotros } from "./paginas/nosotros.jsx";
import { Logout } from "./componentes/logout";
import RegisterUser from "./paginas/registro_usuario";
import { Reserva } from "./paginas/reservas/reserva";
import CrudUsuarios from "./paginas/cruds/cruds";
import ConfirmarReserva from "./paginas/confirmar_reserva";
import { Reportes_reservas } from './paginas/reportes/reporte_reserva';
import { ReservasUsuario } from './paginas/admin_reservas_client';

import { GenerarQr } from "./paginas/generarqr"; // ConfirmarReserva

export function App() {

  return (
    <Router>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route exact path='/' >{/* <Estrenos></Estrenos> */}<Peliculas></Peliculas></Route>
          <Route exact path='/pelicula/:peliculaID'><DetallePeliculas/><Volver></Volver></Route>
          <Route exact path='/ReservarButacas'><ReservarButacas></ReservarButacas></Route>
          <Route exact path='/emiprime/contactanos'><Contactanos/></Route>
          <Route exact path='/emiprime/Nosotros'> <Nosotros/></Route>
          <Route path='/login' exact render = {props=>(<LoginPage {...props}/>)}></Route>
          <Route path='/logout' exact render={props=>(<Logout {...props}/> )}/>
          <Route path='/registrarse' exact render={props=>(<RegisterUser {...props}/> )}/>
          <Route path='/Reserva' exact render={props=>(<Reserva {...props}/> )}/>
          <Route path='/login/activar cuenta' exact render={props=>(<ActivarCuenta {...props}/> )}/>
          <Route path='/admin/crud adminis tracion' exact render={props=>(<CrudUsuarios {...props}/> )}/>
          <Route path='/admin/confirmar reserva de butacas' exact render = {props=>(<ConfirmarReserva {...props}/>)}></Route>
          <Route exact path='/admin/report/reserv'><Reportes_reservas/></Route>
          <Route path='/reservas tablero infor macion' exact render={props=>(<ReservasUsuario {...props}/> )}/>
        </Switch>
      </main>
      <br />
      <Footer></Footer>
    </Router>
  );
}
