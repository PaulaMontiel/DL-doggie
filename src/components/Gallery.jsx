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

    const addToCart = (product) => {
        const newCart = cart;
        const totalAmount = cost + product.price;
        newCart.push(product);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    const productDetails = (id) => {
        if (products.length > 0) {
            navigate(`/product/${id}`)
        }
    };
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.img} alt={product.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.desc}</p>
                                    <button className="btn btn-outline-success btn-sm" onClick={() => productDetails(product.id)}>Ver Más 👀</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(product)}>Agregar 🛒</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
