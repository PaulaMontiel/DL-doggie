import { useState } from "react";
import { Table, Button } from "react-bootstrap";

export default function Publicaciones() {
    const [publicacion, setPublicaciones] = useState([
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
    ]);






    return (
        <>
            <Table striped bordered hover style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {publicacion.map((publicacion) => (
                        <tr key={publicacion.id}>
                            <td>{publicacion.id}</td>
                            <td>{publicacion.nombre}</td>
                            <td>{publicacion.descripcion}</td>
                            <td>
                                <img src={publicacion.imagen} alt={publicacion.nombre} width="50" />
                            </td>
                            <td>{publicacion.precio}</td>
                            <td>{publicacion.stock}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>);
}


// const PublicacionesAgregados = publicacion.filter((publicacion) => publicacion.cantidad > 0);


