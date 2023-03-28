import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../producto_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {
    
    const navigate = useNavigate();
    const { productos } = useContext(context);
    const { cost, setCost } = useContext(contextCost);
    const {cart, setCart} = useContext(cartContext);

    const addToCart = (producto) => {
        const newCart = cart;
        const totalAmount = cost + producto.precio;
        newCart.push(producto);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    const productoDetails = (id) => {
        if (productos.length > 0) {
            navigate(`/producto/${id}`)
        }
    };
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    {productos.map((producto) => (
                        <div key={producto.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={producto.img} alt={producto.nombre} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <button className="btn btn-outline-success btn-sm" onClick={() => productoDetails(producto.id)}>Ver Más 👀</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(producto)}>Agregar 🛒</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
