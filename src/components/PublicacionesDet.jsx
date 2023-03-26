import { useState } from "react";
import { Table, Button } from "react-bootstrap";

export default function PublicacionesDet() {
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

    const agregarPublicacion = (id) => {
        const nuevosPublicaciones = publicacion.map((publicacion) => {
            if (publicacion.id === id && publicacion.cantidad < publicacion.stock) {
                return { ...publicacion, cantidad: publicacion.cantidad + 1 };
            }
            return publicacion;
        });
        setPublicaciones(nuevosPublicaciones);
    };

    const quitarPublicacion = (id) => {
        const nuevosPublicaciones = publicacion.map((publicacion) => {
            if (publicacion.id === id && publicacion.cantidad > 0) {
                return { ...publicacion, cantidad: publicacion.cantidad - 1 };
            }
            return publicacion;
        });
        setPublicaciones(nuevosPublicaciones);
    };

    const eliminarPublicacion = (id) => {
        const nuevosPublicaciones = publicacion.filter((publicacion) => publicacion.id !== id);
        setPublicaciones(nuevosPublicaciones);
    };

    const calcularTotal = () => {
        return publicacion.reduce((total, publicacion) => {
            return total + publicacion.precio * publicacion.cantidad;
        }, 0);
    };

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
                        <th>Acciones</th>
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
                            <td>
                                <Button variant="warning" onClick={() => eliminarPublicacion(publicacion.id)}>
                                    Eliminar Publicacion
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>);
}


// const PublicacionesAgregados = publicacion.filter((publicacion) => publicacion.cantidad > 0);


