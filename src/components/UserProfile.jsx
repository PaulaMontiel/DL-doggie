import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Publicaciones from '../views/Publicaciones';
import "../assets/css/profile.css"
import Avatar2 from "../assets/img/Avatar2.webp";
<<<<<<< HEAD
import { useNavigate , useLocation} from 'react-router-dom';
import { useEffect, useContext, useState } from "react";
import Context from "../user_context";
import axios from 'axios'
import alertify from 'alertifyjs';
const urlServer = process.env.REACT_APP_BASE_URL
=======
import { useLocation, useNavigate } from 'react-router-dom';

>>>>>>> cbc44d6720739b82b08cf7bf689cb474161e2711


export default function UserProfile() {
    let location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    let nombres = "";
    let apellidoP = "";
    let apellidoM = "";
    let correo = "";
    let celular = "";
    let tipo = "";
    let numero = "";
    let region = "";
    let ciudad = "";
    let calle = "";
    let id = 0;

    const leerToken = () => {
        let token = location.state.token
        const base64Url = token.split('.')[1];
        const payload = JSON.parse(atob(base64Url));
        return payload
    }
    const payload = leerToken()

    if (payload.usuario.tipo === "usuario") {
        console.log(payload.usuario);
        id = payload.usuario.id_usuario;
        nombres = payload.usuario.nombres
        apellidoP = payload.usuario.apellido_paterno
        apellidoM = payload.usuario.apellido_materno
        correo = payload.usuario.correo
        celular = payload.usuario.celular
        tipo = payload.usuario.tipo
        region = payload.usuario.region
        ciudad = payload.usuario.ciudad
        calle = payload.usuario.calle
        numero = payload.usuario.numero
        console.log(calle)
    }
    if (payload.usuario.tipo === "vendedor") {
        console.log(payload.usuario);
        id = payload.usuario.id_vendedor;
        nombres = payload.usuario.nombre
        apellidoP = payload.usuario.apellido_paterno
        apellidoM = payload.usuario.apellido_materno
        correo = payload.usuario.correo
        celular = payload.usuario.telefono
        tipo = payload.usuario.tipo
        region = payload.usuario.region
        ciudad = payload.usuario.ciudad
        calle = payload.usuario.calle
        numero = payload.usuario.numero
        console.log("vendedor")
    }

<<<<<<< HEAD
    const leerToken = () =>{
            let token = location.state.token
            const base64Url = token.split('.')[1];
            const payload = JSON.parse(atob(base64Url));
            return payload
    }
    
    const payload =  leerToken()

    useEffect(()=>{
      //  leerToke()
        getDireccion()
    }, [])
    
    useEffect(() => {
        tipoUsuario();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [direccion]);

    const tipoUsuario = ({data}) =>{
        if(payload.usuario.tipo === "usuario"){
            console.log(calle)
           

            nombres = payload.usuario.nombres
            apellidoP = payload.usuario.apellido_patermo
            apellidoM = payload.usuario.apellido_materno
            correo =  payload.usuario.correo
            celular = payload.usuario.celular
            tipo = payload.usuario.tipo
            ciudad = data[0].ciudad
         //   numero = direccion.numero
           // calle = data.calle
            console.log(calle)

        }
        if(payload.usuario.tipo === "vendedor"){
            console.log("vendedor")
        }
    }


   
   

=======
    const irPublicacion = () => {
        navigate(`/publicationForm`)
    }


>>>>>>> cbc44d6720739b82b08cf7bf689cb474161e2711

    return (

        <section className="section-profile" style={{ backgroundColor: '#eee', opacity: 0.8 }}>
            <Container className="py-5">
                <Row style={{ marginTop: 1 }}>
                    <Col lg={4}>
                        <Card className="mb-4, shadow">
                            <Card.Body className="card-body text-center blur">
                                <Card.Img src={Avatar2} alt="avatar" className="img-fluid m-4" style={{ width: '120px' }} />
                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Nombre</p>
                                    </Col>
                                    <Col sm={9}>
                                        <h6 className="mb-0 fw-bold">{nombres} {apellidoP} {apellidoM}</h6>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Email</p>
                                    </Col>
                                    <Col sm={9}>
                                        <h6 className="mb-0 fw-bold">{correo}</h6>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Telefono</p>
                                    </Col>
                                    <Col sm={9}>
                                        <h6 className="mb-0 fw-bold">{celular}</h6>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Direccion</p>
                                    </Col>
                                    <Col sm={9}>
                                        <h6 className="mb-0 fw-bold">{calle} {numero}, {ciudad}, región de {region} </h6>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-center mb-2 mt-3">
                                    <Button className="btn-colors" variant="primary" onClick={() => irPublicacion()}>Añadir Productos</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className='shadow'>
                            <Card.Body>
                                {tipo === "usuario" ?
                                    < Row >
                                        <Col cmd={12}>
                                            <h4 className="mb-0 fw-bold">
                                                Mis Compras
                                            </h4>
                                        </Col>
                                    </Row> :
                                    <Row>
                                        <Col cmd={12}>
                                            <h4 className="mb-0 fw-bold">
                                                Mis Publicaciones
                                            </h4>
                                        </Col>
                                    </Row>
                                }
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col md={12} style={{ marginTop: "20px" }}>
                                <Publicaciones id={[id=id,tipo=tipo]}></Publicaciones>
                            </Col>

                        </Row>
                    </Col>
                </Row>
<<<<<<< HEAD
            </Container>
        </section>
    )
}
=======
            </Container >
        </section >
    );
}
>>>>>>> cbc44d6720739b82b08cf7bf689cb474161e2711
