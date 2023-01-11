import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,  Navbar, Container, Button, NavDropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import logo from "../img/logo.png";
import React from 'react'

export function NavBar() {
    return (
        <Navbar bg="black" variant="dark">
            <Container>
                <Navbar.Brand href={"/"}>
                    <img
                    src={logo}
                    width="140"
                    height="70"
                    className="d-inline-block align-top"
                    alt="logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={"/"}>Inicio</Nav.Link>
                    {localStorage.getItem("infoLogin")&&
                        <Nav.Link href={"/Reserva"}>Reservar Butacas</Nav.Link>
                    }
                    <Nav.Link href={"/Nosotros"}>Nosotros</Nav.Link>
                    <Nav.Link href={"/contactanos"}>Contactanos</Nav.Link>
                </Nav>
                <Nav>
                    {localStorage.getItem("infoLogin") ?
                        <>
                            <NavDropdown title={JSON.parse(localStorage.getItem("infoLogin")).datos.nombres}>
                                <DropdownItem href={"/reservas tablero infor macion"}>Reservas Hechas</DropdownItem>
                                {JSON.parse(localStorage.getItem('infoLogin')).datos.user_rol === 'admin' &&
                                    <>
                                        <DropdownItem href={"/admin/crud adminis tracion"}>Administrar Pagina</DropdownItem>
                                        <DropdownItem href={"/admin/confirmar reserva de butacas"}>Confirmar reservaciones</DropdownItem>
                                        <DropdownItem href={"/admin/report/reserv"}>Gestionar Reportes de Reserva</DropdownItem>
                                    </>
                                }
                                <DropdownItem href={"/logout"}>Cerrar Sesion</DropdownItem>
                            </NavDropdown>
                        </>
                        :
                        <> 
                            <Button href={"/login"} variant="success">Iniciar sesion</Button>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}
