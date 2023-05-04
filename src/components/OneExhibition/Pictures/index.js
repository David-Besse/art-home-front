import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import { findExhibition } from 'src/selectors/pictures';

import ArtistPresentation from '../ArtistPresentation';

import './styles.scss';

// Component gathering all informations needed (show artist information, exhibiton information and all artworks related to the exhibition)
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
        <Button className="button customButton" onClick={() => setModalShow(true)}>
          Pour en savoir plus sur {artist.nickname}
        </Button>
      </div>
      <ArtistPresentation show={modalShow} onHide={() => setModalShow(false)} />

      {/* Showcase of all the picture included in the exhibiton */}
      <section className="picture-list">
        {artwork.map((picture) => (
          <Card className="card-picture" key={picture.slug}>
            <Card.Img className="image-picture" src={picture.picture} alt={picture.slug} />
            <Card.Body className="body-picture px-0">
              <Card.Title className="title-picture">{picture.title}</Card.Title>
              <Card.Text className="description-picture">{picture.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>

    </div>
  );
};

export default Pictures;
