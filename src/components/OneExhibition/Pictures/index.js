import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

const Pictures = () => {
  const { slug } = useParams();
  const {
    title, artwork, artist, description,
  } = useSelector((state) => findExhibition(state.pictures.list, slug));

  return (

    <div>
      {/* Presentation of the artist who created the exhibition */}
      <Card>
        <Card.Img variant="top" src={artist.nickname} alt={artist.slug} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      {/* Showcase of all the picture included in the exhibiton */}
      <Container>
        <Row>
          {artwork.map((picture) => (
            <Col key={picture.slug}>
              <img src={picture.picture} alt={picture.slug} />
              <p>{picture.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pictures;

/* name={exhibition.title}
pictures={exhibition.artwork} // Need a map to fill the gallery part in Pictures (array of objects)
artist={exhibition.artist}
description={exhibition.description} */
