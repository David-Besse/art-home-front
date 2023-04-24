// Component gathering all the information needed to show the artixt information, the exhibiton information and all the artworks related to the exhibition

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

import ArtistPresentation from '../ArtistPresentation';

import './style.scss';

const Pictures = () => {
  const { slug } = useParams();
  const {
    title, artwork, artist, description,
  } = useSelector((state) => findExhibition(state.pictures.list, slug));
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="exhibition">
      {/* Presentation of the artist who created the exhibition */}

      {isShown && (
        <ArtistPresentation />
      )}

      {/* <Card className="card-artist">
        <Card.Img className="avatar" variant="top" src={artist.avatar} alt={artist.slug} />
        <Card.Body className="body-artist">
          <Card.Title className="nickname">{artist.nickname}</Card.Title>
          <Card.Text className="realname">{artist.firstname} {artist.lastname}</Card.Text>
          <Card.Text className="presentation">{artist.presentation}</Card.Text>
        </Card.Body>
      </Card> */}

      {/* Information about the exhibition */}
      <Card className="card-exhibition">
        <Card.Body className="body-exhibtion">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Title
            className="nickname"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {artist.nickname}
          </Card.Title>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Showcase of all the picture included in the exhibiton */}
      <Row xs={1} md={1} lg={2} className="g-4">
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
