import React from "react";
import { useContext, useState } from "react";
import "../assets/css/gallery.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";
import { useNavigate } from "react-router-dom";
import alertify from 'alertifyjs';

export default function Carro() {
    const navigate = useNavigate();

    const { cart, setCart } = useContext(cartContext);
    const { cost, setCost } = useContext(contextCost);

    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState('');

    function hasJWT() {
        let flag = false;
        //check user has JWT token
        localStorage.getItem("token") ? flag = true : flag = false
        const token = localStorage.getItem("token");
        setToken(token);
        console.log(token)
        setLogged(flag);
        return flag;
    }

    const goToGallery = () => {
        navigate(`/gallery`, {
            state: {
                id: 0,
                categoria: "Todos los Productos"
            }
        });
    };
    const payProcess = () => {
        if(hasJWT()){
            console.log('carrito')
            navigate(`/boleta`);
        }else{
            alertify.error("Debe iniciar session para realizar compras");
        }
        
    };
    const productDelete = (id, valor) => {
        console.log('delete');
        let newCart = cart;
        let precio = 0;
        const index = cart.findIndex(product => parseInt(product.id_producto) === parseInt(id));
        newCart.splice(index, 1);
        precio = parseInt(cost) - parseInt(valor);
        setCart([...newCart]);
        setCost(precio);

    }

    return (
        <section id="gallery">
            <div className="container-fluid m-4 flex-row justify-content-center" style={{ backgroundColor: "whitesmoke" }}>
                <div className="d-flex align-content-center flex-column detalles">
                    <div className="pt-4">
                        <h3>Detalles del pedido</h3>
                    </div>
                    <div className="flex-row carro">
                        {cart.map((product) => (
                            <div key={product.id_producto} className="details d-flex flex-column p-2" style={{ backgroundColor: "white" }}>
                                <div className="card-carro d-flex flex-row">
                                    <img src={product.img} alt={product.nombre} className="img-cart" />
                                    <div className="card-body">
                                        <h5 className="card-title">Producto: {product.nombre}</h5>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Cantidad: {product.cantidad}</h5>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(product.precio * product.cantidad)}</h5>
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-danger" onClick={() => productDelete(product.id_producto, product.precio * product.cantidad)}><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="m-4">
                        <h4>Total: ${cost}</h4>
                        <button type='button' className="btn btn-color m-2" onClick={() => goToGallery()}>Cancelar</button>
                        <button type='button' className="btn btn-colors m-2" onClick={() => payProcess()}> Ir a Pagar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}