import React, { useState } from 'react';
import "../assets/css/registration.css";
import { postvendedor }from '../services/Connection.js';
import { useNavigate } from "react-router-dom";


function RegistrationForm() {
  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    telefono: '',
    correo: '',
    fecha_ingreso: '',
    region: '',
    ciudad: '',
    comuna: '',
    calle: '',
    numero: '',
    contrasena: ''  
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    postvendedor(formData)
    // Code to submit form data to server
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className='container-fluid back-user'>
      <div className="row align-content-center">
        <div className='formulario p-5 st-lo'>
          <h2 className='p-2'>Registro de usuario</h2>
          <form className='form gap-2' onSubmit={handleSubmit}>
                <div className='dir-col'>
                  <h4>Datos Personales</h4>
                  <div className='col-es'>
                    <div>
                      <label>Nombres:</label>
                    </div>
                    <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Apellido Paterno:</label>
                    <input type="text" name="apellido_paterno" required value={formData.apellido_paterno} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Apellido Materno:</label>
                    <input type="text" name="apellido_materno" required value={formData.apellido_materno} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Rut:</label>
                    <input type="number" name="rut" required value={formData.rut} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>region:</label>
                    <input type="text" name="region" required value={formData.region} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Comuna:</label>
                    <input type="text" name="Comuna" required value={formData.comuna} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Ciudad:</label>
                    <input type="text" name="ciudad" required value={formData.ciudad} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Celular:</label>
                    <input type="tel" name="celular" required value={formData.celular} onChange={handleChange} />
                  </div>
                  <div>            
                    <input className='button-submit' type="submit" value="Register" />
                  </div>
              </div>
              <div className='d-flex flex-column gap-3 dir-col'>
                <div>
                    <h4>Informacion de la Cuenta</h4>
                    <div className='col-es'>
                      <label>Email:</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='col-es'>
                      <label>Contraseña:</label>
                      <input type="password" name="password" required value={formData.password} onChange={handleChange} />
                    </div>
                    <div className='col-es'>
                      <label>Confirmar Contraseña:</label>
                      <input type="password" name="confirmpassword" required value={formData.confirmpassword} onChange={handleChange} />
                    </div>
                </div>
                <div>
                  <h4>Informacion de la Empresa</h4>
                  <div className='col-es'>
                    <label>Nombre Sociedad:</label>
                    <input type="name" name="name" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Rut</label>
                    <input type="number" name="number" required value={formData.password} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Confirmar Contraseña:</label>
                    <input type="password" name="confirmpassword" required value={formData.confirmpassword} onChange={handleChange} />
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
