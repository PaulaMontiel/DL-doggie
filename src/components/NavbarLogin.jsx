/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import dl from "../assets/img/dl-store.jpeg";
import contextCost from "../total_amount_context";
import contextCategorias from "../categoria_context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const { cost } = useContext(contextCost);
    const navigate = useNavigate();
    const { categorias, setCategorias } = useContext(contextCategorias);
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://backmarketdb.fly.dev/categoria/listado");
                const data = await response.json();
                setCategorias([...data]);
                console.log(categorias);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, [setCategorias]);

    const irProductos = (datos) => {
        navigate(`/gallery`,{
            state: {
              id: datos.id,
              categoria: datos.categoria
            }
          })
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-md navbar-dark bg-negro">
                <span className="navbar-brand">
                    <img src={dl} alt="myIcon" width={200} />
                </span>
                {/* <span>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="buscar"
                        className="placeholderSearch p-2"
                    />
                </span> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse d-flex flex-row justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="Nav-link">
                        <NavLink
                            className={setActiveClass}
                            style={{ color: "#F3EFE0" }}
                            to="/"
                            end
                        >
                            <i className="fa-solid fa-house">Home</i>
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button
                                    className="btn btn-dark dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <NavLink
                                        className={setActiveClass}
                                        style={{ color: "#F3EFE0" }}
                                        to="/gallery"
                                        end
                                    >
                                        <i className="fa-solid fa-shop">Tienda</i>
                                    </NavLink>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li key={0}>
                                        <a className="dropdown-item" onClick={() => irProductos({id:0, categoria: "Todos los Productos"})}>Todos los Productos</a>
                                    </li>
                                    {categorias && categorias.length > 0 && categorias.map((categoria) => (
                                        <li key={categoria.id_categoria}>
                                            <a className="dropdown-item" onClick={() => irProductos({id:categoria.id_categoria,categoria: categoria.nombre})}>
                                                {categoria.nombre}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="Nav-link">
                        <NavLink
                            className={setActiveClass}
                            style={{ color: "#F3EFE0" }}
                            to="/UserProfile"
                            end
                        >
                            <i className="fa-solid  fa-user"> Perfil </i>
                        </NavLink>
                    </div>
                    <div className="Nav-link">
                        <NavLink
                            className={setActiveClass}
                            style={{ color: "#F3EFE0" }}
                            to="/carrito"
                            end
                        >
                            <i className="fa-solid fa-cart-shopping">
                                {" "}
                                {new Intl.NumberFormat("es-CL", {
                                    currency: "CLP",
                                    style: "currency",
                                }).format(cost)}{" "}
                            </i>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;