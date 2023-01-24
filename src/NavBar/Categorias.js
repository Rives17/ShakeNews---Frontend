import { Link } from "react-router-dom"
import "./Categoria.css"
import deportes from '../images/deportes.png'
import ciencia from '../images/atomo.png'
import politica from '../images/politico.png'
import actualidad from '../images/calendario.png'
import salud from '../images/jeringuilla.png'

function Categorias() {

    return(
        <div className="menu-categorias">
                <li className="list-categorias">
                    <Link to="/listNews/actualidad" className="categoria"> <img src={actualidad} alt="Icono actualidad" className="icono-categoria" /> Actualidad</Link>
                    <Link to="/listNews/deportes" className="categoria"> <img src={deportes} alt="Icono deportes" className="icono-categoria" /> Deportes</Link>
                    <Link to="/listNews/politica" className="categoria"> <img src={politica} alt="Icono política" className="icono-categoria" /> Política</Link>
                    <Link to="/listNews/ciencia"className="categoria"> <img src={ciencia} alt="Icono ciencia" className="icono-categoria" /> Ciencia</Link>
                    <Link to="/listNews/salud" className="categoria"> <img src={salud} alt="Icono salud" className="icono-categoria" /> Salud</Link>
                </li>
        </div>
    )
}

export default Categorias