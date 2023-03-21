import React from "react";
import "../assets/css/login.css";

export default function Login(){
    return (

    <div className="container-fluid log-back">
        <div className=" d-flex flex-column align-items-stretch ">
            <div className="d-flex flex-row justify-content-evenly me-5">
                <form className="validate-form d-flex flex-column align-items-center st-log m-5 p-5 gap-3">
                    <span className="p-b-37">
                        Sign In
                    </span>
                    <div className="validate-input m-b-20" data-validate="Enter username or email">
                        <input className="p-2" type="text" name="username" placeholder="username or email"/>
                            <span className="focus-input100"></span>
                    </div>
                    <div className="validate-input m-b-25" data-validate="Enter password">
                        <input className="input100" type="password" name="pass" placeholder="password"/>
                            <span className="focus-input100"></span>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="btn">
                            Sign In
                        </button>
                    </div>
                    <div className="text-center p-t-57 p-b-20">
                        <span className="txt1">
                            Or login with
                        </span>
                    </div>
                    <div className="flex-c p-b-112">
                        <a href="/" className="login100-social-item">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="/" className="login100-social-item">
                            <i class="fa-brands fa-google cloud-icon"></i>
                        </a>
                    </div>
                    <div className="text-center">
                        <a href="/front-dog-shp/userRegistration" className="txt2 hov1">
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}