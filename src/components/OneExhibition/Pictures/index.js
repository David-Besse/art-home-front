// Component gathering all the information needed to show the artixt information, the exhibiton information and all the artworks related to the exhibition

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

import ArtistPresentation from '../ArtistPresentation';

import './styles.scss';

const Pictures = () => {
  const { slug } = useParams();
  const {
    title, artwork, artist, description,
  } = useSelector((state) => findExhibition(state.pictures.list, slug));
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="exhibition">

      {/* Information about the exhibition */}
      <Card className="card-exhibition">
        <Card.Body className="body-exhibtion">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Title className="nickname">{artist.nickname}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Presentation of the artist who created the exhibition */}
      <div className="artist-button">
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Pour en savoir plus sur {artist.nickname}
        </Button>
      </div>
      <ArtistPresentation
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* Showcase of all the picture included in the exhibiton */}
      <Row xs={1} md={1} lg={2} className="g-4 picture-list">
        {artwork.map((picture) => (
          <Col className="col-picture" key={picture.slug}>
            <Card className="card-picture">
              <Card.Img className="image-picture" src={picture.picture} alt={picture.slug} />
              <Card.Body className="body-picture">
                <Card.Title className="title-picture">{picture.title}</Card.Title>
                <Card.Text className="description-picture">{picture.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Pictures;
