import { Link } from "react-router-dom";
import estilos from "../css/volver.module.css"
import React from 'react'

export function Volver(){
    return(
        <div className={estilos.volVer}>
            <Link className={estilos.button} to={"/"}>VOLVER</Link>
        </div>
    );
}

/* estado_butaca
<div className="container filas">
      <div className="row">              
      <div className='seat' id='F1' onClick={clickk}>F1</div>
      <div className="seat" id='F2' onClick={clickk}>F2</div>
      <div className="seat" id='F3' onClick={clickk}>F3</div>
      <div className="seat" id='F4' onClick={clickk}>F4</div>
      <div className="seat" id='F5' onClick={clickk}>F5</div>
      <div className="seat" id='F6' onClick={clickk}>F6</div>
      <div className="seat" id='F7' onClick={clickk}>F7</div>
      <div className="seat" id='F8' onClick={clickk}>F8</div>
      <div className="seat" id='F9' onClick={clickk}>F9</div>
      <div className="seat" id='F10' onClick={clickk}>F10</div>
      <div className="seat" id='F11' onClick={clickk}>F11</div>
      <div className="seat" id='F12' onClick={clickk}>F12</div>
      <div className="seat" id='F13' onClick={clickk}>F13</div>
      <div className="seat" id='F14' onClick={clickk}>F14</div>
      <div className="seat" id='F15' onClick={clickk}>F15</div>
      <div className="seat" id='F16' onClick={clickk}>F16</div>
      <div className="seat" id='F17' onClick={clickk}>F17</div>
    </div>
    <div className="row">               
      <div className="f seat" id='E1' onClick={clickk}>E1</div>
      <div className="f seat" id='E2' onClick={clickk}>E2</div>
      <div className="f seat" id='E3' onClick={clickk}>E3</div>
      <div className="f seat" id='E4' onClick={clickk}>E4</div>
      <div className="f seat" id='E5' onClick={clickk}>E5</div>
      <div className="f seat" id='E6' onClick={clickk}>E6</div>
      <div className="f seat" id='E7' onClick={clickk}>E7</div>
      <div className="f seat" id='E8' onClick={clickk}>E8</div>
      <div className="f seat" id='E9' onClick={clickk}>E9</div>
      <div className="f seat" id='E10' onClick={clickk}>E10</div>
      <div className="f seat" id='E11' onClick={clickk}>E11</div>
      <div className="f seat" id='E12' onClick={clickk}>E12</div>
      <div className="f seat" id='E13' onClick={clickk}>E13</div>
      <div className="f seat" id='E14' onClick={clickk}>E14</div>
    </div>

    <div className="row">              
      <div className="f seat" id='D1' onClick={clickk}>D1</div>
      <div className="f seat" id='D2' onClick={clickk}>D2</div>
      <div className="f seat" id='D3' onClick={clickk}>D3</div>
      <div className="f seat" id='D4' onClick={clickk}>D4</div>
      <div className="f seat" id='D5' onClick={clickk}>D5</div>
      <div className="f seat" id='D6' onClick={clickk}>D6</div>
      <div className="f seat" id='D7' onClick={clickk}>D7</div>
      <div className="f seat" id='D8' onClick={clickk}>D8</div>
      <div className="f seat" id='D9' onClick={clickk}>D9</div>
      <div className="f seat" id='D10' onClick={clickk}>D10</div>
      <div className="f seat" id='D11' onClick={clickk}>D11</div>
      <div className="f seat" id='D12' onClick={clickk}>D12</div>
      <div className="f seat" id='D13' onClick={clickk}>D13</div>
      <div className="f seat" id='D14' onClick={clickk}>D14</div>
    </div>

    <div className="row">            
        <div className="f seat" id='C1' onClick={clickk}>C1</div>
        <div className="f seat" id='C2' onClick={clickk}>C2</div>
        <div className="f seat" id='C3' onClick={clickk}>C3</div>
        <div className="f seat" id='C4' onClick={clickk}>C4</div>
        <div className="f seat" id='C5' onClick={clickk}>C5</div>
        <div className="f seat" id='C6' onClick={clickk}>C6</div>
        <div className="f seat" id='C7' onClick={clickk}>C7</div>
        <div className="f seat" id='C8' onClick={clickk}>C8</div>
        <div className="f seat" id='C9' onClick={clickk}>C9</div>
      <div className="f seat"  id='C10' onClick={clickk}>C10</div>
      <div className="f seat"  id='C11' onClick={clickk}>C11</div>
      <div className="f seat"  id='C12' onClick={clickk}>C12</div>
      <div className="f seat"  id='C13' onClick={clickk}>C13</div>
      <div className="f seat"  id='C14' onClick={clickk}>C14</div>
    </div>

    <div className="row">           
      <div className="f seat" id='B1' onClick={clickk}>B1</div>
      <div className="f seat" id='B2' onClick={clickk}>B2</div>
      <div className="f seat" id='B3' onClick={clickk}>B3</div>
      <div className="f seat" id='B4' onClick={clickk}>B4</div>
      <div className="f seat" id='B5' onClick={clickk}>B5</div>
      <div className="f seat" id='B6' onClick={clickk}>B6</div>
      <div className="f seat" id='B7' onClick={clickk}>B7</div>
      <div className="f seat" id='B8' onClick={clickk}>B8</div>
      <div className="f seat" id='B9' onClick={clickk}>B9</div>
      <div className="f seat" id='B10' onClick={clickk}>B10</div>
      <div className="f seat" id='B11' onClick={clickk}>B11</div>
      <div className="f seat" id='B12' onClick={clickk}>B12</div>
      <div className="f seat" id='B13' onClick={clickk}>B13</div>
      <div className="f seat" id='B14' onClick={clickk}>B14</div>
    </div>

    <div className="row">              
      <div className="f seat" id='A1' onClick={clickk}>A1</div>
      <div className="f seat" id='A2' onClick={clickk}>A2</div>
      <div className="f seat" id='A3' onClick={clickk}>A3</div>
      <div className="f seat" id='A4' onClick={clickk}>A4</div>
      <div className="f seat" id='A5' onClick={clickk}>A5</div>
      <div className="f seat" id='A6' onClick={clickk}>A6</div>
      <div className="f seat" id='A7' onClick={clickk}>A7</div>
      <div className="f seat" id='A8' onClick={clickk}>A8</div>
      <div className="f seat" id='A9' onClick={clickk}>A9</div>
      <div className="f seat" id='A10' onClick={clickk}>A10</div>
      <div className="f seat" id='A11' onClick={clickk}>A11</div>
      <div className="f seat" id='A12' onClick={clickk}>A12</div>
      <div className="f seat" id='A13' onClick={clickk}>A13</div>
      <div className="f seat" id='A14' onClick={clickk}>A14</div>
    </div>
    <div className="screen"> PANTALLA</div>
      </div>

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A15','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A16','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A17','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'A18','disponible', 'A');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B15','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B16','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B17','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'B18','disponible', 'B');


INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C15','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C16','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C17','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'C18','disponible', 'C');


INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D15','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D16','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D17','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'D18','disponible', 'D');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E15','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E16','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E17','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'E18','disponible', 'E');

--INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F17','disponible', 'F');
--INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'F18','disponible', 'F');

--INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G1','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G2','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G3','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G4','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G5','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G6','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G7','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G8','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G9','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G10','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G11','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G12','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G13','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G14','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G15','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G16','disponible', 'G');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G17','disponible', 'G');
--INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'G18','disponible', 'G');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H1','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H2','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H3','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H4','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H5','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H6','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H7','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H8','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H9','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H10','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H11','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H12','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H13','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H14','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H15','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H16','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H17','disponible', 'H');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'H18','disponible', 'H');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I1','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I2','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I3','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I4','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I5','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I6','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I7','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I8','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I9','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I10','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I11','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I12','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I13','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I14','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I15','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I16','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I17','disponible', 'I');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'I18','disponible', 'I');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J1','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J2','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J3','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J4','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J5','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J6','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J7','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J8','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J9','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J10','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J11','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J12','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J13','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J14','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J15','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J16','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J17','disponible', 'J');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'J18','disponible', 'J');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K1','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K2','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K3','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K4','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K5','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K6','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K7','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K8','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K9','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K10','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K11','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K12','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K13','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K14','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K15','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K16','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K17','disponible', 'K');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'K18','disponible', 'K');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L1','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L2','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L3','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L4','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L5','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L6','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L7','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L8','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L9','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L10','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L11','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L12','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L13','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L14','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L15','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L16','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L17','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L18','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L19','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L20','disponible', 'L');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(18,'L21','disponible', 'L');






INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(9,'F17','disponible', 'F');


INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(10,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(11,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(12,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(13,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(14,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(15,'F17','disponible', 'F');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F16','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(16,'F17','disponible', 'F');


--sala 1

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A1','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A2','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A3','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A4','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A5','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A6','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A7','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A8','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A9','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A10','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A11','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A12','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A13','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A14','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A15','disponible', 'A');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'A16','disponible', 'A');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B1','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B2','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B3','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B4','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B5','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B6','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B7','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B8','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B9','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B10','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B11','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B12','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B13','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B14','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B15','disponible', 'B');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'B16','disponible', 'B');


INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C1','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C2','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C3','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C4','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C5','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C6','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C7','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C8','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C9','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C10','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C11','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C12','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C13','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C14','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C15','disponible', 'C');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'C16','disponible', 'C');


INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D1','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D2','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D3','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D4','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D5','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D6','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D7','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D8','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D9','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D10','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D11','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D12','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D13','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D14','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D15','disponible', 'D');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'D16','disponible', 'D');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E1','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E2','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E3','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E4','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E5','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E6','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E7','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E8','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E9','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E10','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E11','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E12','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E13','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E14','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E15','disponible', 'E');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'E16','disponible', 'E');

INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F1','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F2','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F3','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F4','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F5','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F6','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F7','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F8','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F9','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F10','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F11','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F12','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F13','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F14','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F15','disponible', 'F');
INSERT INTO butaca(id_butacas_funcion_f, ubicacion, estado_butaca, fila)VALUES(19,'F16','disponible', 'F');

estado_butaca */