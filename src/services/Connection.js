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
    const { data: token } = await axios.post(urlServer + endpoint, formData);
    alertify.success('Usuario identificado con éxito ');
    console.log(token)
    localStorage.setItem("token", token.jwt_token);
  //  setUsuario()
   
  } catch ({ response: { data: message } }) {
     alertify.error(message + " 🙁");
    console.log(message);
  }
};