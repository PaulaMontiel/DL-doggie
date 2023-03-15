import React from "react";
import { useContext } from "react";
import "../assets/css/gallery.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Carro() {

    const { cart } = useContext(cartContext);
    const { cost } = useContext(contextCost);
    
    return (
        <section id="gallery">
            <div className="container m-4" style={{ backgroundColor: "whitesmoke" }}>
                <div className="pt-4">
                    <h3>Detalles del pedido</h3>
                </div>
                <div className="row carro">
                    {cart.map((product) => (
                        <div key={product.id} className="details d-flex flex-column p-2" style={{ backgroundColor: "white" }}>
                            <div className="card-carro d-flex flex-row">
                                <img src={product.img} alt={product.name} className="img-cart" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                </div>
                                <div>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <h4>Total: ${cost}</h4>
                <button type='button' className="btn btn-success"> Ir a Pagar</button>
            </div>
        </section>
    )
}