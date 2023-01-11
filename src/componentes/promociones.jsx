import React from "react";
import nosotros from "../json/promo.json"

import quienes_somos from "../img/valores.png"
import valores from "../img/quienes_somos.png"
import vision from "../img/vision.png"
import mision from "../img/mision.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import estilos from "../css/nosotros.module.css"

export function Nosotros(){
    return(
        <div>
            <br />
            <h1 className={estilos.tittle}>NOSOTROS</h1>
            <br />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={quienes_somos}
                        alt="First slide"
                    /> 
                    <Carousel.Caption>
                        <h3>QUIENES SOMOS</h3>
                        <p>{nosotros["quienes somos"][0]}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mision}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MISIÓN</h3>
                        <p>{nosotros["misión"][0]}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={vision}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>VISIÓN</h3>
                        <p>{nosotros["visión"][0]}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className= "d-block w-100"
                        src={valores}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>VALORES</h3>
                        {nosotros.valores.map(function(valor) {return <li className={estilos.li}>{valor}</li>})}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        );
}