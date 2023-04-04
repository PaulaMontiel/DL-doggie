import React, { useState } from 'react';
import "../assets/css/registration.css";
import axios from 'axios';
import alertify from 'alertifyjs';
const urlServer = process.env.REACT_APP_BASE_URL




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

   async function  postUser (formData){
    const endpoint = "usuario/crear";
    try {
        const consulta = await axios.post(urlServer + endpoint, formData);
        console.log(consulta)
        alertify.success("Usuario registrado con éxito");
      } catch (error) {
        alertify.error("Algo salió mal ..."+" 🙁");
        console.log(error);
      }
}


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


  

  return (
    <div className='container-fluid back-user'>
      <div className="row align-content-center">
        <div className='formulario p-5 st-lo'>
          <h2 className='p-2'>Registro de usuario</h2>
          <form className='form gap-2'  id="formulario" onSubmit={handleSubmit}>
                <div className='dir-col'>
                  <h4>Datos Personales</h4>
                  <div className='col-es'>
                    <input type="text" name="nombres" placeholder=" Nombre" required value={formData.nombres} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="apellido_paterno"  placeholder=" Apellido Paterno"  required value={formData.apellido_paterno} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="apellido_materno" placeholder=" Apellido Materno" required value={formData.apellido_materno} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="rut" placeholder=" Rut" required value={formData.rut} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                 
                    <input type="tel" name="celular" placeholder=" Celular"required value={formData.celular} onChange={handleChange} />
                  </div>
                  <div>
                    <input type="date" name="fecha_nacimiento" placeholder=" Fecha Nacimiento" required value={formData.fecha_nacimiento} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                      <input type="radio" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={handleChange} /> Masculino
                      <input type="radio" name="sexo" value="femenino" checked={formData.sexo === 'femenino'} onChange={handleChange} /> Femenino
                  </div>
                  <h4>Informacion de la Cuenta</h4>
                <div className='col-es'>
                  <input type="email" name="correo" placeholder=" Correo" required value={formData.correo} onChange={handleChange} />
                </div>
                <div className='col-es'>
                  <input type="password" name="contrasena" placeholder=" Contraseña"required value={formData.contrasena} onChange={handleChange} />
                </div>

              </div>
              <div className='d-flex flex-column gap-3 dir-col'>
              <h4>Datos Dirección</h4>
                  <div className='col-es'>
                    <input type="text" name="region" placeholder=" Region" required value={formData.region} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="ciudad" placeholder=" Ciudad" required value={formData.ciudad} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="comuna" placeholder=" Comuna" required value={formData.comuna} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="calle"  placeholder=" Calle" required value={formData.calle} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="numero" placeholder=" Numero" required value={formData.numero} onChange={handleChange} />
                  </div>
                  <div className='col-es'>
                    <input type="text" name="descripcion" placeholder=" Referencia" required value={formData.descripcion} onChange={handleChange} />
                  </div>
                  <div>
                    <input className='button-submit' type="submit" value="Register"  />
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

export default RegistrationForm;
