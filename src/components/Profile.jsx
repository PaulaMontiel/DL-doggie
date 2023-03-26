import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Profile() {
    const [publications, setPublications] = useState([
        {
            id: 1,
            title: 'Publicación 1',
            content: 'Contenido de la publicación 1',
        },
        {
            id: 2,
            title: 'Publicación 2',
            content: 'Contenido de la publicación 2',
        },
        // ... más publicaciones
    ]);

    const renderPublications = () => {
        return publications.map((publication) => (
            <Col key={publication.id} md={4} className="mb-4">
                <Card>
                    <Card.Body>
                        <Card.Title>{publication.title}</Card.Title>
                        <Card.Text>{publication.content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    return (
        <Container>
            <Row>{renderPublications()}</Row>
        </Container>
    );
}
