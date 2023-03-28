import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Publicaciones from './Publicaciones';
import "../assets/css/profile.css"
import { useNavigate } from 'react-router-dom';
import Avatar2 from "../assets/img/Avatar2.webp";
// import { useHistory } from 'react-router-dom';



export function UserProfile() {
    const navigate = useNavigate();

    return (
        <section className="section-profile" style={{ backgroundColor: '#eee', opacity: 0.8 }}>
            <Container className="py-5">
                <Row style={{ marginTop: 1}}>
                    <Col lg={4}>    
                        <Card className="mb-4, shadow">
                            <Card.Body className="card-body text-center">
                                <Card.Img src={Avatar2} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3 fw-bold">Felipe Cruz</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant="primary">Cerrar Sesion</Button>
                                    <Button variant="outline-primary ms-1">Enviar Mensaje</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className='shadow'>
                            <Card.Body >
                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Nombre</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">Felipe Cruz</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Email</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">example@example.com</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Telefono</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">(097) 234-5678</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3} >
                                        <p className="mb-0 fw-bold">Tipo de Usuario</p>
                                    </Col>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0 fw-bold">Vendedor</p>
                                    </div>
                                </Row>


                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0 fw-bold">Direccion</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0 fw-bold">Bay Area, San Francisco, CA</p>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Row>
                            <Col md={12} style={{marginTop: "20px"}}>
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
