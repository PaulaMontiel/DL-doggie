import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../producto_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {

    const navigate = useNavigate();
    const { products } = useContext(context);
    const { cost, setCost } = useContext(contextCost);
    const { cart, setCart } = useContext(cartContext);

    const addToCart = (product) => {
        var newCart = cart;
        const totalAmount = cost + product.precio;
        var foundIndex = cart.findIndex(x => x.id_producto === product.id_producto);
        if (foundIndex!== -1) {
            let cantidad = newCart[foundIndex]['cantidad'];
            newCart[foundIndex]['cantidad'] = cantidad + 1;
            setCart([...newCart]);
        } else {
            product["cantidad"] = 1;
            newCart.push(product);
            setCart([...newCart]);
        }

        setCost(totalAmount);
    }

    const productoDetails = (id) => {
        if (products.value.length > 0) {
            navigate(`/product/${id}`)
        }
    };
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    {products && products.hasOwnProperty('value') && products.value.length > 0 &&
                        products.value.map((producto) => (
                            <div key={producto.id_producto} className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={producto.img} alt={producto.nombre} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-title">${producto.precio}</p>
                                        <p className="card-text">{producto.descripcion}</p>
                                        <button className="btn btn-outline-success btn-sm" onClick={() => productoDetails(producto.id_producto)}>Ver Más 👀</button>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(producto)}>Agregar 🛒</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {!products && !products.hasOwnProperty('value') && products.value.length < 0 &&
                        <div className="m-5">
                            <h4 className="m-5">No Existen products para mostrar</h4>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
