import React, { useState } from 'react';
import { postUser }from '../services/Connection.js';
import "../assets/css/registration.css";



function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    celular: '',
    contrasena: '',
    correo:'',
    fecha_nacimiento:'',
    sexo:'',
    region:'',
    ciudad:'',
    comuna:'',
    calle:'',
    numero:'',
    descripcion:''
  });




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    postUser(formData)
    // Code to submit form data to server
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function comprobarClave() {
    let clave1 = document.getElementById("contrasena").value
    let clave2 = document.getElementById("confirmpassword").value

    if (clave1 === clave2) {
       alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")
    } else {
       alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo")
    }
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
                    <input type="text" name="nombres" required value={formData.nombres} onChange={handleChange} />
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
                    <input type="text" name="rut" required value={formData.rut} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Fecha de Nacimiento:</label>
                    <input type="date" name="fecha_nacimiento" required value={formData.fecha_nacimiento} onChange={handleChange} />

                  </div>
                  <div className='col-es'>
                      <label className='gap-2'>Genero : </label>
                      <input type="radio" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={handleChange} /> Masculino
                      <input type="radio" name="sexo" value="femenino" checked={formData.sexo === 'femenino'} onChange={handleChange} /> Femenino
                  </div>
                  
                  <div className='col-es'>
                    <label>Celular:</label>
                    <input type="tel" name="celular" required value={formData.celular} onChange={handleChange} />
                  </div>
                  <h4>Informacion de la Cuenta</h4>
                <div className='col-es'>
                  <label>Correo:</label>
                  <input type="email" name="correo" required value={formData.correo} onChange={handleChange} />
                </div>
                <div className='col-es'>
                  <label>Contraseña:</label>
                  <input type="password" name="contrasena" required value={formData.contrasena} onChange={handleChange} />
                </div>
                <div className='col-es'>
                  <label>Confirmar Contraseña:</label>
                  <input type="password" name="confirmpassword" required value={formData.confirmpassword} onChange={handleChange} />
                </div> 
                
              </div>
              <div className='d-flex flex-column gap-3 dir-col'>
              <h4>Datos Dirección</h4>
                  <div className='col-es'>
                    <label>region:</label>
                    <input type="text" name="region" required value={formData.region} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Ciudad:</label>
                    <input type="text" name="ciudad" required value={formData.ciudad} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Comuna:</label>
                    <input type="text" name="comuna" required value={formData.comuna} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Calle:</label>
                    <input type="text" name="calle" required value={formData.calle} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>numero:</label>
                    <input type="text" name="numero" required value={formData.numero} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <label>Descripción:</label>
                    <input type="text" name="descripcion" required value={formData.descripcion} onChange={handleChange} />
                  </div>

                

              </div>
              <div className='d-flex  gap-2 dir-col'>
                  <div>
                    <input className='button-submit' type="submit" value="Register"  />
                  </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
