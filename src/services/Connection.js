import axios from 'axios'
import alertify from 'alertifyjs';
const urlServer = process.env.REACT_APP_BASE_URL


export async function  postUser (formData){
    const endpoint = "usuario/crear";
    try {
        const consulta = await axios.post(urlServer + endpoint, formData);
        console.log(consulta)
        alert("Usuario registrado con éxito");
       
      } catch (error) {
        alert("Algo salió mal ...");
        console.log(error);
      }
}


export async function getvendedor  (formData){
    const endpoint = "vendedor/crear";
    try {
        const consulta = await axios.post(urlServer + endpoint, formData);
        console.log(consulta)
        alertify.success("Usuario registrado con éxito");
       
      } catch (error) {
        alertify.error("Algo salió mal ...");
        console.log(error);
      }
}



export const iniciarSesionUsuario = async (formData) => {
  const endpoint = "login";
  try {
    if (!formData.correo || !formData.contrasena) return alert("Email y password obligatorias");
    const { data } = await axios.post(urlServer + endpoint, formData);
    console.log(data)
    if (data.statusCode === 200){
      alertify.success(data.message);
      localStorage.setItem("token", data.jwt_token);
    }
    if(data.statusCode === 401){
      alertify.error(data.message);
    }
    
  
  } catch (error) {
    
     alertify.error(error.message + " 🙁");
    console.log(error.message);
  }
};