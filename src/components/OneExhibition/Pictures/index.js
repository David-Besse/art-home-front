import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
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
          <Card.Text className="presentation">{artist.firstname} {artist.lastname}</Card.Text>
          <Card.Text className="presentation">{artist.presentation}</Card.Text>
        </Card.Body>
      </Card>

      {/* Information about the exhibition */}
      <Card className="card-exhibition">
        <Card.Body className="body-exhibtion">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Title className="nickname">{artist.nickname}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Showcase of all the picture included in the exhibiton */}
      <Row xs={1} md={1} lg={2} className="g-4">
        {artwork.map((picture) => (
          <Col className="col-picture" key={picture.slug}>
            <Card className="card-picture" >
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

{ /* <div className=" display-exhibition">
        {artwork.map((picture) => (
          <Card className="card-picture" key={picture.slug}>
            <Card.Img className="image-picture" src={picture.picture} alt={picture.slug} />
            <div className="info-picture">
              <Card.Title className="title-picture">{picture.title}</Card.Title>
              <Card.Text className="description-picture">{picture.description}</Card.Text>
            </div>
          </Card>
        ))}
      </div> */ }
