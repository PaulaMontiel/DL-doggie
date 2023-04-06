import React, { useState, useEffect } from 'react';
import "../assets/css/registrationP.css";
import axios from 'axios'
import alertify from 'alertifyjs';
import { useNavigate } from "react-router-dom";
const urlServer = process.env.REACT_APP_BASE_URL;



function CrearPublicacion() {
    const [id, setId] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        img: '',
        precio: '',
        stock: '',
        estado: 'activo',
        marca: '',
        id_vendedor: '',
        id_categoria: ''

    });
    const [token, setToken] = useState('');

    function hasJWT() {
        let flag = false;
        //check user has JWT token
        localStorage.getItem("token") ? flag = true : flag = false
        const token = localStorage.getItem("token");
        setToken(token);
        console.log(token)
        if (!flag) {
            localStorage.clear();
            navigate(`/`)
            window.location.reload(false);
        }
    }

    useEffect(() => {
        hasJWT()
    }, []);

    const navigate = useNavigate();

    async function postPublicacion(formData) {
        const endpoint = "productos/crear";
        console.log(formData)
        try {
            formData.precio = parseInt(formData.precio)
            formData.stock = parseInt(formData.stock)
            console.log("entro al try")
            console.log(urlServer + endpoint)
            const consulta = await axios.post(urlServer + endpoint, formData);
            console.log(consulta)
            alertify.success("Publicacion creada con éxito");
            navigate(`/profile`, {
                state: {
                    token: token
                }
            })
        } catch (error) {
            alertify.error("Algo salió mal ...");
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        console.log(selectedCategoria);
        postPublicacion(formData)
        // Code to submit form data to server
    }

    const handleChange = (event) => {
        setImageUrl(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    const [selectedCategoria, setSelectedCategoria] = useState('Categoria');

    const handleCategoriaSelect = (event) => {
        event.preventDefault();
        setSelectedCategoria(event.target.textContent);
        console.log(event.target.value)
        // actualizar la propiedad 'categoria' en el estado 'formData'
        setFormData({
            ...formData,
            id_categoria: parseInt(event.target.value)
        });
    }


    const leerToken = () => {
        let token = localStorage.getItem("token")
        console.log(token)
        const base64Url = token.split('.')[1];
        const payload = JSON.parse(atob(base64Url));
        setId(payload.usuario.id_vendedor)
        formData.id_vendedor = payload.usuario.id_vendedor
    }
    

       
  

    useEffect(() => {
        leerToken()

    }, []);

    return (
        <div className='container-fluid back-user'>
            <div className="row align-content-center">
                <div className='formulario p-5 st-lo'>
                    <h2 className='p-2'>Crear Nueva Publicacion</h2>
                    <form className='form gap-2' id="formulario" onSubmit={handleSubmit}>
                        <div className='dir-col'>
                            <h4>Datos del Producto </h4>
                            <div className='col-es'>
                                <input type="text" name="nombre" placeholder=" Nombre del Producto" cols={40} required value={formData.nombre} onChange={handleChange} />
                            </div>
                           
                            <div className='col-es'>
                                <input type="number" name="precio" placeholder=" Precio" required value={formData.precio} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <input type="number" name="stock" placeholder=" Stock" required value={formData.stock} onChange={handleChange} />
                            </div>

                            <div className='col-es'>
                                <input type="text" name="marca" placeholder=" Marca" required value={formData.marca} onChange={handleChange} />
                            </div>
                            <div className='col-es'>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectedCategoria}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect} value="1">Higiene</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect} value="2">Alimento</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect} value="3">Descanso</button></li>
                                        <li><button className="dropdown-item" onClick={handleCategoriaSelect} value="4">Entretencion</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                 <input type="text" onChange={handleChange}  placeholder=" Link de Imagen" required value={formData.img}/>
                                 <img width={100} src={imageUrl} alt="" />
                            </div>
                     
                            <div className='d-flex flex-column gap-3 dir-col'>
                                    <div className='col-es'>
                                        <textarea  type="text" name="descripcion" placeholder=" Descripcion" rows={4} cols={30} required value={formData.descripcion} onChange={handleChange} />
                                    </div>
                                    <div className='d-flex flex-column gap-3 dir-col'>
                                        <div>
                                            <input className='button-submit' type="submit" value="Crear" />
                                        </div>
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