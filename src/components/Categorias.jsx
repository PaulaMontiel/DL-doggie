import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/categorias.css';



export default function Categorias() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div className="mynavbar">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="collapse navbar-collapse d-flex flex-row justify-content-start ps-5 pb-3" id="navbarNavAltMarkup">
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            Alimentos
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            Descanso
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            Accesorios
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            Higiene 
                        </NavLink>
                    </div>                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            Entretencion
                        </NavLink>
                    </div>
                </div>
            </nav >
       
        </div >
    );
}