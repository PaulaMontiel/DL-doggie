import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../product_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";
import acana from '../assets/img/acana.png';
import bravery from '../assets/img/bravery.webp';
import bravectorr from '../assets/img/bravectorr.png';
import hills from '../assets/img/hills.jpeg';
import proplan from '../assets/img/proplan.png';
import doggieHero from '../assets/img/faq-hero.png';
import doggieHero from '../assets/img/faq-hero.png';
import doggieHero from '../assets/img/faq-hero.png';


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
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={acana} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={bravery} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={bravectorr} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={hills} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={proplan} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.img} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.img} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                        <div key={product.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.img} alt={product.name} className="card-img-top" />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}