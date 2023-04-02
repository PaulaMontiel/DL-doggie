import "../assets/css/gallery.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import contextProductos from "../producto_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {

    const navigate = useNavigate();
    const { cost, setCost } = useContext(contextCost);
    const { cart, setCart } = useContext(cartContext);
    const [sort, setSort] = useState("UnClicked");
    // Data for Products
    const { products, setProducts } = useContext(contextProductos);
    var productFiltered = [];

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
            })
            const data = await Promise.allSettled(successArray.map(response => response.value.clone().json()))
            productFiltered = data[0];
            console.log(productFiltered);
            setProducts(productFiltered);
            console.log(products);

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
        if (foundIndex !== -1) {
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

    //metodo ordenar
    const sortItems = () => {

        if (sort === "Clicked") {
            products.value.sort((a, b) => parseInt(a.precio) - parseInt(b.precio));
            setSort("UnClicked");
            console.log(sort);
        } else if (sort === "" || sort === "UnClicked") {
            products.value.sort((a, b) => parseInt(b.precio) - parseInt(a.precio));
            setSort("Clicked");
            console.log(sort);
        }
    };

    const filters = { marca: ["BRAVERY"] };
    const filterProducts = () => {
        const filtered = (products.value || []).filter(product => {
            return Object.keys(filters).reduce((acc, filter) => {
                const filterValues = filters[filter];
                const productValue = product[filter];

                console.log(filterValues);
                console.log(productValue);

                //This line defines what is your match
                const found = filterValues.find(fv => fv === productValue);
                return acc && found;
            }, true);
        })
        const filteredProducts = {status: 'fulfilled', value: filtered}
        setProducts(filteredProducts)
    }

    return (
        <section id="gallery">
            <div className="container">
                <h1 className="titleGallery">Categoría Alimentos</h1>
                <div>
                    <span className="input-group-btn">
                        <button
                            className="btn"
                            value={sort}
                            onClick={sortItems}
                            type="button">
                            {sort === "Clicked" ? <i className="fa-solid fa-arrow-up-9-1"></i> : <i className="fa-solid fa-arrow-down-1-9"></i>}
                        </button>
                    </span>
                </div>
                <div className="row">
                    {products && products.hasOwnProperty('value') && products.value.length > 0 &&
                        products.value.map((producto) => (
                            <div key={producto.id_producto} className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={producto.img} alt={producto.nombre} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-title">{new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.precio)}</p>
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
