import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Publicaciones from './Publicaciones';
import "../assets/css/profile.css"
import Avatar2 from "../assets/img/Avatar2.webp";

import { useNavigate , useLocation} from 'react-router-dom';
import { useEffect, useContext, useState } from "react";
import Context from "../user_context";



async function getUserProfile(token) {
    const endpoint = 'usuario/${userId}';
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
      
    } catch (error) {
      console.log(error);
      console.log(endpoint)
      alertify.error("Algo salió mal al obtener el perfil del usuario");
    }
  }

export default function UserProfile() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(Context);
    const [localUser, setLocalUser] = useState({});

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("token");
            // const decodedToken = jwt_decode(token);
            // // const userId = decodedToken.id_usuario
            const data = await getUserProfile(token);
            if (data) {
                setLocalUser(data);
            }
        }
    
        fetchUserData();
    }, []);

   

    let location = useLocation();
    const {user, setUser } = useContext(Context);
    const [localUser, setLocalUser] = useState({});

    console.log(location);
    

    let nombres = "";
    let apellidoP = "";
    let apellidoM = "";
    let correo = "";
    let celular = "";
    let tipo = "";
    let numero = "";
    let ciudad = "";
    let calle = "";


    const getDireccion = async (formData) => {
       const url = `https://backmarketdb.fly.dev/direccion/listado/${payload.usuario.id_usuario}`; // construye la URL
            fetch(url)
            .then(response => response.json())
            .then(data => {
                ciudad = data[0].ciudad
                numero = data[0].numero
                calle = data[0].calle
               return data
            })
            .catch(error => {
                console.error(error); // maneja el error
            });
    }

    const leerToken = () =>{
            let token = location.state.token
            const base64Url = token.split('.')[1];
            const payload = JSON.parse(atob(base64Url));
            return payload
    }
    const payload =  leerToken()

    if(payload.usuario.tipo === "usuario"){
        const {direccionget} = getDireccion()
        console.log(direccionget)
        nombres = payload.usuario.nombres
        apellidoP = payload.usuario.apellido_patermo
        apellidoM = payload.usuario.apellido_materno
        correo =  payload.usuario.correo
        celular = payload.usuario.celular
        tipo = payload.usuario.tipo
        console.log(calle)
    }
    if(payload.usuario.tipo === "vendedor"){
        console.log("vendedor")
    }

  
   


    return (

        <section className="section-profile" style={{ backgroundColor: '#eee', opacity: 0.8 }}>
            <Container className="py-5">
                <Row style={{ marginTop: 1 }}>
                    <Col lg={4}>
                        <Card className="mb-4, shadow">
                            <Card.Body className="card-body text-center blur">
                                <Card.Img src={Avatar2} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3 fw-bold">{nombres} {apellidoP} {apellidoM}</h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant="primary" >Cerrar Sesion</Button>
                                    {/* <Button variant="outline-primary ms-1">Enviar Mensaje</Button> */}
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
