import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import '../assets/css/publicaciones.css';

export default function Publicaciones({id}) {
    const [publicaciones, setPublicaciones] = useState([]);
    const [compras, setCompras] = useState([]);
    const userId = id[0];
    const userType = id[1]
    console.log(userId);
    console.log(userType);

    useEffect(() => {
        async function fetchData() {
            if (userType === 'vendedor') {
                try {
                    const response = await fetch("https://backmarketdb.fly.dev/productos/mostrar/" + userId);
                    const data = await response.json();
                    setPublicaciones([...data]);
                    console.log(data);
                } catch (error) {
                    console.error("Error fetching prooducts:", error);
                }
            } else if (userType === "usuario") {
                /*try {
                    const response = await fetch("https://backmarketdb.fly.dev/productos/mostrar/" + userId);
                    const data = await response.json();
                    setPublicaciones([...data]);
                    console.log(publicaciones);
                } catch (error) {
                    console.error("Error fetching prooducts:", error);
                }*/
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, [setPublicaciones]);

    /*const [publicacion, setPublicaciones] = useState([
        {
            id: 1,
            nombre: "Producto 1",
            descripcion: "Descripción del Publicacion 1",
            imagen: "/ruta/a/imagen1.jpg",
            precio: 1000,
            stock: 10,
            cantidad: 0,
        },
        {
            id: 2,
            nombre: "Producto 2",
            descripcion: "Descripción del Publicacion 2",
            imagen: "/ruta/a/imagen2.jpg",
            precio: 2000,
            stock: 5,
            cantidad: 0,
        },
        {
            id: 3,
            nombre: "Producto 3",
            descripcion: "Descripción del Publicacion 3",
            imagen: "/ruta/a/imagen3.jpg",
            precio: 3000,
            stock: 2,
            cantidad: 0,
        },
    ]);*/






    return (
        <>
            <Table striped bordered hover style={{ backgroundColor: "lightblue", opacity: "0,5", borderRadius: "20px", overflow: "hidden" }}>
                <thead>
                    <tr>
                        <th>Id Producto</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {publicaciones.map((publicacion) => (
                        <tr key={publicacion.id_producto}>
                            <td>{publicacion.id_producto}</td>
                            <td>{publicacion.nombre}</td>
                            <td>{publicacion.descripcion}</td>
                            <td>{publicacion.precio}</td>
                            <td>{publicacion.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>);
}


// const PublicacionesAgregados = publicacion.filter((publicacion) => publicacion.cantidad > 0);


