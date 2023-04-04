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



