import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import contextProductos from "../producto_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {

    const navigate = useNavigate();
    const { cost, setCost } = useContext(contextCost);
    const { cart, setCart } = useContext(cartContext);

    // Data for Products
    const { products, setProducts } = useContext(contextProductos);

    const array = [
        fetch('https://backmarketdb.fly.dev/productos/listado')
    ]

    async function makeRequests() {
        try {
            const responses = await Promise.allSettled(array);
            const successArray = [];
            // eslint-disable-next-line
            responses.map(response => {
                if (response.status === "fulfilled") {
                    successArray.push(response);
                }
            }
            )
            const data = await Promise.allSettled(successArray.map(response => response.value.json()))
            setProducts(data[0]);

        } catch {
            console.error("Multiple fetch failed");
        }
    }

    useEffect(() => {
        makeRequests();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                                        <p className="card-title">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(producto.precio)}</p>
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
