import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Publicaciones from './Publicaciones';
import "../assets/css/profile.css"
import Avatar2 from "../assets/img/Avatar2.webp";
import { useEffect, useState, useContext } from 'react';
import Context from '../user_context';
import { useNavigate } from 'react-router-dom';

// import jwt_decode from "jsonwebtoken"
import axios from 'axios'
import alertify from 'alertifyjs';
const urlServer = process.env.REACT_APP_BASE_URL

export default function UserProfile() {
    const navigate = useNavigate();
    const {user, setUser } = useContext(Context);
    const [localUser, setLocalUser] = useState({});
    
    const nombres = "";
    const apellidoP = "";
    const apellidoM = "";
    const correo = "";
    const celular = "";
    const tipo = "";
    const numero = "";
    const ciudad = "";
    const calle = "";


    const leerToken = () =>{
            let token = localStorage.getItem("token")
            const base64Url = token.split('.')[1];
            const payload = JSON.parse(atob(base64Url));
            return payload
    }
    const payload =  leerToken()

    if(payload.usuario.tipo === "usuario"){
        nombres = payload.usuario.nombres
        apellidoP = payload.usuario.apellido_patermo
        apellidoM = payload.usuario.apellido_materno
        correo =  payload.usuario.correo
        celular = payload.usuario.celular
        tipo = payload.usuario.tipo
        // numero = 
        // ciudad = 
        // calle = 
    }

    console.log(payload.usuario.tipo)
    // const eliminarToken = () => {
    //     localStorage.removeItem('token');
    // }

   

    return (

        <section className="section-profile" style={{ backgroundColor: '#eee', opacity: 0.8 }}>
            <Container className="py-5">
                <Row style={{ marginTop: 1 }}>
                    <Col lg={4}>
                        <Card className="mb-4, shadow">
                            <Card.Body className="card-body text-center blur">
                                <Card.Img src={Avatar2} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3 fw-bold">{nombres}</h5>
                                <p className="text-muted mb-1">{apellidoP}{apellidoM}</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant="primary" >Cerrar Sesion</Button>
                                    <Button variant="outline-primary ms-1">Enviar Mensaje</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className='shadow'>
                            <Card.Body>
                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Nombre</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">{nombres}</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Email</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">{correo}</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Telefono</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">{celular}</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3} >
                                        <p className="mb-0 fw-bold">Tipo de Usuario</p>
                                    </Col>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0 fw-bold">{tipo}</p>
                                    </div>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Direccion</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">{calle}+" "+{numero} +" - "+{ciudad} </p>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Row>
                            <Col md={12} style={{ marginTop: "20px" }}>
                                <Publicaciones></Publicaciones>
                            </Col>

                        </Row>
                        <Row>
                            <Col cmd={12}>
                                <Button>
                                    Mis Publicaciones
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
