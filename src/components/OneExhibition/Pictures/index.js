import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';

const Pictures = ({
  name,
  artwork,
  artist,
  description,
}) => {
  <div>
    {/* Presentation of the artist who created the exhibition */}
    <Card>
      <Card.Img variant="top" src={artist.nickname} alt={artist.slug} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    {/* Showcase of all the picture included in the exhibiton */}
    <Container>
      <Row>
        <Col>
          <img src={artwork.picture} alt={artwork.slug} />
          <p>{artwork.description}</p>
        </Col>
      </Row>
    </Container>
  </div>;
};

export default Pictures;
