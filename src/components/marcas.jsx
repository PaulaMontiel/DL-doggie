import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../product_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {

    const navigate = useNavigate();
    const { products } = useContext(context);
    const { cost, setCost } = useContext(contextCost);
    const {cart, setCart} = useContext(cartContext);

    const productDetails = (id) => {
        if (products.length > 0) {
            navigate(`/product/${id}`)
        }
    };
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">

                </div>
            </div>
        </section>
    );
}
