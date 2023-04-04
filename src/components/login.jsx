import React, { useState } from 'react';
import { iniciarSesionUsuario }from '../services/Connection.js';
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

export default function Login(){
    const navigate = useNavigate();
   
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: ''
      });

    const leerToken = () =>{
        let token = localStorage.getItem("token")
        console.log(token)
        const base64Url = token.split('.')[1];
        const payload = JSON.parse(atob(base64Url));
        const nombreUsuario  = payload.usuario.id_usuario;
        console.log(payload)
        console.log(nombreUsuario)
    }

    const navegation = () => {
        let token = localStorage.getItem("token")
        console.log(token)
        if (token !== '') {
            navigate("/");     
        //    console.log("login fail")
        }else{
            navigate("/login");
          ///  console.log("login correct")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        iniciarSesionUsuario(formData)
       leerToken()
       navegation()
      
        //  navigate("/");
        // Code to submit form data to server
    }

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }

    
    return (

    <div className="log-back">
        <div className=" d-flex flex-column align-items-center ">
            <div className="st-log">
                <form className=" d-flex flex-column align-items-center p-4 gap-3" onSubmit={handleSubmit}>
                    <span className="p-b-37">
                       <h3> Inicio de Sesión</h3>
                    </span>
                    <div className="" data-validate="Enter username or email">
                        <input className="p-2 text-center" type="text" name="correo" placeholder="correo" required value={formData.correo} onChange={handleChange}/>
                            <span className=""></span>
                    </div>
                    <div className="" data-validate="Enter password">
                        <input className="text-center" type="password" name="contrasena" placeholder="password" required value={formData.contrasena} onChange={handleChange}/>
                            <span className="focus-input100"></span>
                    </div>
                    <div className="">
                        <button className="btn-sign-in">
                            Sign In
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="txt1">
                            Or login with
                        </span>
                    </div>
                    <div className="flex-c p-b-112 gap-3">
                        <a href="/" className="p-2">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="/" className="p-2">
                            <i className="fa-brands fa-google cloud-icon"></i>
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="/front-dog-shp/userVsSeller" className="txt2 hov1">
                            Registrate aquí
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}