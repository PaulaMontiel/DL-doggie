import { useState } from "react";
import { Table, Button } from "react-bootstrap";

export default  function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Descripción del producto 1",
      imagen: "/ruta/a/imagen1.jpg",
      precio: 1000,
      stock: 10,
      cantidad: 0,
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Descripción del producto 2",
      imagen: "/ruta/a/imagen2.jpg",
      precio: 2000,
      stock: 5,
      cantidad: 0,
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Descripción del producto 3",
      imagen: "/ruta/a/imagen3.jpg",
      precio: 3000,
      stock: 2,
      cantidad: 0,
    },
  ]);

  const agregarProducto = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id && producto.cantidad < producto.stock) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const quitarProducto = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
  };

  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Cantidad</th>
            <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {productos.map((producto) => (
        <tr key={producto.id}>
          <td>{producto.id}</td>
          <td>{producto.nombre}</td>
          <td>{producto.descripcion}</td>
          <td>
            <img src={producto.imagen} alt={producto.nombre} width="50" />
          </td>
          <td>{producto.precio}</td>
          <td>{producto.stock}</td>
          <td>{producto.cantidad}</td>
          <td>
            <Button variant="success" onClick={() => agregarProducto(producto.id)}>
              +
            </Button>{" "}
            <Button variant="danger" onClick={() => quitarProducto(producto.id)}>
              -
            </Button>{" "}
            <Button variant="warning" onClick={() => eliminarProducto(producto.id)}>
              x
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <Carrito productos={productos} total={calcularTotal()} />
</>);
}

function Carrito({ productos, total }) {
const productosAgregados = productos.filter((producto) => producto.cantidad > 0);

return (
<div>
<h2>Carrito de compras</h2>
{productosAgregados.length === 0 ? (
<p>No hay productos en el carrito</p>
) : (
<ul>
{productosAgregados.map((producto) => (
<li key={producto.id}>
{producto.nombre} ({producto.cantidad}) - ${producto.precio * producto.cantidad}
</li>
))}
</ul>
)}
<p>Total: ${total}</p>
</div>
);
}
