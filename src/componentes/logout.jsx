import { useHistory } from "react-router-dom";

export function Logout(){
    localStorage.clear()
    localStorage.clear()
    let history = useHistory()
    //console.log(peliculas.map((pelicula) => <Peli_Card key={pelicula.id} pelicula={pelicula} tipo_peli={'estrenos'}/>));
    return(
        window.location.href = '/'
    );
}