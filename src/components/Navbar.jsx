import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css';
import dl from "../assets/img/dl-store.jpeg";



export default function Navbar({ cost }) {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div className="">
            <nav className="navbar navbar-expand-md navbar-dark bg-negro">
                <span className="navbar-brand">
                    <img src={dl} alt="myIcon" width={200}/>
                </span>
                <span>
                    <input type="search" name="" id="" placeholder="buscar" className="placeholderSearch p-2" />
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/" end>
                            <i className="fa-solid fa-house">Home</i>
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/login" end>
                            <i className="fa-solid  fa-user"> Iniciar Sesion </i>
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: '#F3EFE0' }} to="/carrito" end>
                            <i className="fa-solid fa-cart-shopping">  ${cost} </i>
                        </NavLink>
                    </div>
                </div>
            </nav >
       
        </div >
    );
}