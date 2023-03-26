import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/gallery.css";
import "../assets/css/products.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

const Products = ({ product }) => {
    const navigate = useNavigate();
    const { cost, setCost } = useContext(contextCost);
    const {cart, setCart} = useContext(cartContext);

    const goToGallery = () => {
        navigate(`/gallery`);
    };

    const addToCart = (product) => {
        const newCart = cart;
        const totalAmount = cost + product.price;
        newCart.push(product);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    if (product.hasOwnProperty("ingredients") && product.ingredients.length > 0) {

        return (
            <div className="container">
                <div className="row">
                    <div key={product.id} className="">
                        <div className="card d-flex flex-row m-4">
                            <img src={product.img} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <div>
                                    <p className="card-text">{product.desc}</p>
                                    {product.ingredients.map((ingredient) => (<h6>🍕{ingredient}</h6>))}
                                </div>
                                <br />
                                <h4>Precio : $ {product.price}</h4>

                                <button className="btn btn-outline-success btn-sm" onClick={() => goToGallery()}>Volver a la Galería</button>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(product)}>Agregar 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;