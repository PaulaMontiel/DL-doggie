import React from "react";
import "../assets/css/perfil.css";

export default function Login(){
    return (

        <div className="container-fluid doggie-bck" >
            <div className="row">
                <div className="card d-flex flex-column gap-3">
                    <div>
                        <img className="perfil.img" src="usuario.img" alt="" />
                    </div>
                    <div>
                        <p className="">{}</p>
                    </div>
                </div>
                <div className="card"></div>
            </div>

        </div>

    )
}