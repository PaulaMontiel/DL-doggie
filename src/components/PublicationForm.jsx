import React, { useState } from 'react';
import "../assets/css/registrationP.css";
import axios from 'axios'
import alertify from 'alertifyjs';
import { useNavigate } from "react-router-dom";
const urlServer = process.env.REACT_APP_BASE_URL;

function CrearPublicacion() {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        estado: '',
        marca: '',
        idvendedor: '',
        categoria: '',
        imagen: ''
    });

    const [selectedCategoria, setSelectedCategoria] = useState('Seleccione');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        console.log(selectedCategoria);
        postPublicacion(formData)
        // Code to submit form data to server
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleCategoriaSelect = (event) => {
        setSelectedCategoria(event.target.textContent);
    }

    const navigate = useNavigate();

    async function postPublicacion(formData) {
        const endpoint = "publicacion/crear";
        try {
            const consulta = await axios.post(urlServer + endpoint, formData);
            console.log(consulta)
            alertify.success("Publicacion creada con éxito");
            navigate("/login");
        } catch (error) {
            alertify.error("Algo salió mal ...");
            console.log(error);
        }
    }

    return (
        <div className='container-fluid back-user'>
            <div className="row align-content-center">
                <div className='formulario p-5 st-lo'>
                    <h2 className='p-2'>Crear Nueva Publicacion</h2>
                    <form className='form gap-2' id="formulario" onSubmit={handleSubmit}>
                        <div className='dir-col'>
                            <h4>Datos del Producto </h4>
                            <div className='col-es'>
                                <input type="text" name="nombre" placeholder=" Nombre" required value={formData.nombre} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="text" name="descripcion" placeholder=" Descripcion" required value={formData.descripcion} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="text" name="precio" placeholder=" Precio" required value={formData.precio} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="text" name="stock" placeholder=" Stock" required value={formData.stock} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="text" name="estado" placeholder=" Estado" required value={formData.estado} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="email" name="marca" placeholder=" Marca" required value={formData.correo} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="int" name="idvendedor" placeholder=" ID Vendedor" required value={formData.idVendedor} onChange={handleChange} />
                            </div>
                            <h4>Categoria</h4>
                            <div className='col-es'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectedCategoria}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect}>Higiene</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect}>Alimento</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect}>Descanso</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect}>Entretencion</button></li>
                                    </ul>
                                </div>
                            </div>
                            <h4>Link de Imagen</h4>
                            <div className='col-es'>
                                <input type="text" name="imagen" placeholder=" Ingresar URL Aqui" required value={formData.img} onChange={handleChange} />
                            </div>
                            <div className='d-flex flex-column gap-3 dir-col'>
                                <div>
                                    <input className='button-submit' type="submit" value="Crear" />
                                </div>
                            </div>
                        </div>

                        <div className='d-flex  gap-2 dir-col'>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearPublicacion;