import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/gallery.css";
import "../assets/css/products.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

const Products = ({ product }) => {
    console.log(product);
    const navigate = useNavigate();
    const { cost, setCost } = useContext(contextCost);
    const { cart, setCart } = useContext(cartContext);

    const goToGallery = () => {
        navigate(`/gallery`);
    };

    const addToCart = (product) => {
        const newCart = cart;
        const totalAmount = cost + product.precio;
        newCart.push(product);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    if (product) {

        return (
            <section id="product">
            <div className="container">
                <div className="row">
                    <div key={product.id_producto} className="">
                        <div className="card d-flex flex-row m-4">
                            <img src={product.img} alt={product.nombre} className="card-img-top img-card" />
                            <div className="card-body">
                                <h2 className="card-title">{product.nombre}</h2>
                                <div className="gap-3">
                                    <p className="card-text">{product.descripcion}</p>
                                </div>
                                <br />
                                <div>
                                    <h6>Precio : $ {product.precio}</h6>
                                </div>
                                <div>
                                    <button className="btn btn-outline-success btn-sm" onClick={() => goToGallery()}>Volver a la Galería</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(product)}>Agregar 🛒</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Products;