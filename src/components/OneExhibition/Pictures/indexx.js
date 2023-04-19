// Retrieve the pictures about one specific exhibiton

import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { fetchPictures } from '../../../actions/pictures';

const Pictures = () => {
  fetchPictures();
  const { list } = useSelector((state) => state.exhibition.list);
  return (
    <div>
      {/* Presentation of the artist who created the exhibition */}
      <Card>
        {list.map((exhibition) => (
          <>
            <Card.Img variant="top" src={exhibition.avatar} />
            <Card.Title>{exhibition.title}</Card.Title>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </>
        ))};
      </Card>
      {/* Showcase of all the picture included in the exhibiton */}
      <Container>
        {list.map((exhibition) => (
          <Row>
            <Col>
              <img src={artworks.picture} alt={pictures.title} />
              <p>{artworks.description}</p>
            </Col>
          </Row>
        ))};
      </Container>
    </div>
  );
};

export default Pictures;
