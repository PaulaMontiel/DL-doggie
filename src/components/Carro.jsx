import React from "react";
import { useContext } from "react";
import "../assets/css/gallery.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";
import { useNavigate } from "react-router-dom";

export default function Carro() {
    const navigate = useNavigate();

    const { cart, setCart } = useContext(cartContext);
    const { cost, setCost } = useContext(contextCost);
    const goToGallery = () => {
        navigate(`/gallery`);
    };
    const payProcess = () => {
        console.log('carrito')
        navigate(`/boleta`);
    };
    const productDelete = ( id, valor ) => {
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
            <div className="container m-4" style={{ backgroundColor: "whitesmoke" }}>
                <div className="pt-4">
                    <h3>Detalles del pedido</h3>
                </div>
                <div className="row carro">
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
                                    <h5 className="card-title">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.precio * product.cantidad)}</h5>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-danger" onClick={() => productDelete(product.id_producto, product.precio * product.cantidad)}><i className="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <h4>Total: ${cost}</h4>
                <button type='button' className="btn btn-danger" onClick={() => goToGallery()}>Cancelar</button>
                <button type='button' className="btn btn-success" onClick={() => payProcess()}> Ir a Pagar</button>
            </div>
        </section>
    )
}