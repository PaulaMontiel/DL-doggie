import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import Publicaciones from './Publicaciones';
// import { useHistory } from 'react-router-dom';



export function UserProfile() {
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push('/publicaciones');
    // }

    return (
        <section tyle={{ backgroundColor: '#eee' }}>
            <Container className="py-5">
                <Row>
                    <Col lg={4}>
                        <Card className="mb-4">
                            <Card.Body class="card-body text-center">
                                <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                <h5 className="my-3">John Smith</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant="primary">Follow</Button>
                                    <Button variant="outline-primary ms-1">Message</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4 mb-lg-0">
                            <Card.Body className="p-0">
                                <ListGroup variant="flush" className="rounded-3">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                        <p className="mb-0">https://mdbootstrap.com</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                                        <p className="mb-0">@mdbootstrap</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                                        <p className="mb-0">mdbootstrap</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card>
                            <Card.Body>
                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0">Full Name</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0">Email</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={3}>
                                        <p className="mb-0">Phone</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col sm={3} >
                                        <p className="mb-0">Mobile</p>
                                    </Col>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                </Row>


                                <Row >
                                    <Col sm={3}>
                                        <p className="mb-0">Address</p>
                                    </Col>
                                    <Col sm={9}>
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Row>
                            <Col md={12}>
                                <Publicaciones></Publicaciones>
                                {/* <PublicacionesDet></PublicacionesDet> */}
                            </Col>

                        </Row>
                        <Row>
                            <Col cmd={12}>
                                <Button variant="primary" to="/publicaciones">
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
