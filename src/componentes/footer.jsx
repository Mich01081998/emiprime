import 'bootstrap/dist/css/bootstrap.min.css';
//import { Nav,  Navbar, Container, Button } from 'react-bootstrap'
//import { Link } from "react-router-dom";
//import logo from "../img/logo.png";
import estilos from "../css/footer.module.css"
import React from 'react'

export function Footer() {
    return (
        <footer className={estilos.footer__conteiner}>
            <p className={estilos.parrafo}>&copy; Todos los derechos reservados</p>
        </footer>
    );
}