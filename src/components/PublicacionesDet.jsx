import { useState, useEffect } from "react";
import { Table, Button, Col, Container } from "react-bootstrap";
import "../assets/css/publicaciones.css";

export default function PublicacionesDet() {
    const [publicacion, setPublicaciones] = useState([]);

    useEffect(() => {
        fetch('/front-dog-shp/product.json')  
            .then(response => response.json())
            .then(data => setPublicaciones(data))
            .catch(error => console.log(error));
    }, []);

    // const agregarPublicacion = (id) => {
    //     const nuevosPublicaciones = publicacion.map((publicacion) => {
    //         if (publicacion.id === id && publicacion.cantidad < publicacion.stock) {
    //             return { ...publicacion, cantidad: publicacion.cantidad + 1 };
    //         }
    //         return publicacion;
    //     });
    //     setPublicaciones(nuevosPublicaciones);
    // };

    // const quitarPublicacion = (id) => {
    //     const nuevosPublicaciones = publicacion.map((publicacion) => {
    //         if (publicacion.id === id && publicacion.cantidad > 0) {
    //             return { ...publicacion, cantidad: publicacion.cantidad - 1 };
    //         }
    //         return publicacion;
    //     });
    //     setPublicaciones(nuevosPublicaciones);
    // };

    const eliminarPublicacion = (id) => {
        const nuevosPublicaciones = publicacion.filter((publicacion) => publicacion.id !== id);
        setPublicaciones(nuevosPublicaciones);
    };

    // const calcularTotal = () => {
    //     return publicacion.reduce((total, publicacion) => {
    //         return total + publicacion.precio * publicacion.cantidad;
    //     }, 0);
    // };   

    return (
        <section className="back">
        <Container className="publicacionesUsuario">
            <Col>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ordenar Por
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Nombre</a></li>
                        <li><a className="dropdown-item" href="#">Precio</a></li>
                        <li><a className="dropdown-item" href="#">Marca</a></li>
                    </ul>
                </div>
            </Col>
            <Col>
                <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicacion.map((publicacion, index) => (
                            <tr key={index}>
                                <td className="bold">{publicacion.id}</td>
                                <td className="bold">{publicacion.name}</td>
                                <td className="bold">{publicacion.desc}</td>
                                <td>    
                                    <img src={publicacion.img} alt={publicacion.name} width="100" />
                                </td>
                                <td className="bold">{publicacion.price}</td>
                                <td className="bold">{publicacion.stock}</td>
                                <td className="td">
                                    <Button className="button" variant="danger" onClick={() => eliminarPublicacion(publicacion.id)}>
                                        Eliminar Publicacion
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Container>
        </section>
    );
}


// const PublicacionesAgregados = publicacion.filter((publicacion) => publicacion.cantidad > 0);


