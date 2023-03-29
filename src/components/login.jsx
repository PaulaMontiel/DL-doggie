import React from "react";
import "../assets/css/login.css";

export default function Login(){
    return (

    <div className="log-back">
        <div className=" d-flex flex-column align-items-center ">
            <div className="st-log">
                <form className=" d-flex flex-column align-items-center p-4 gap-3">
                    <span className="p-b-37">
                       <h3> Inicio de Sesión</h3>
                    </span>
                    <div className="" data-validate="Enter username or email">
                        <input className="p-2 text-center" type="text" name="username" placeholder="username or email"/>
                            <span className=""></span>
                    </div>
                    <div className="" data-validate="Enter password">
                        <input className="text-center" type="password" name="pass" placeholder="password"/>
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