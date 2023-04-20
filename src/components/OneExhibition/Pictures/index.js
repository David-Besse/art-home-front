import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

import './style.scss';

const Pictures = () => {
  const { slug } = useParams();
  const {
    title, artwork, artist, description,
  } = useSelector((state) => findExhibition(state.pictures.list, slug));

  return (

  // TODO create an onMouseOVer event to display the information about and artist
  // might need to be isolated in it's own file
    <div className="exhibition">
      {/* Presentation of the artist who created the exhibition */}
      <Card className="card-artist">
        <Card.Img className="avatar" variant="top" src={artist.avatar} alt={artist.slug} />
        <Card.Body className="body-artist">
          <Card.Title className="nickname">{artist.nickname}</Card.Title>
          <Card.Text className="presentation">{artist.presentation}</Card.Text>
        </Card.Body>
      </Card>

      {/* Information about the exhibition */}
      <Card className="card-exhibition">
        <Card.Body className="body-exhibtion">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Showcase of all the picture included in the exhibiton */}
      <Card className="card-picture">
        {artwork.map((picture) => (
          <>
            <Card.Img className="image-picture" src={picture.picture} alt={picture.slug} key={picture.slug} />
            <Card.Text className="description-picture">{picture.description}</Card.Text>
          </>
        ))}
      </Card>
    </div>
  );
};

export default Pictures;
