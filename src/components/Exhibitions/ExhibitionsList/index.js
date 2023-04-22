import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

import './style.scss';

const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <div className="all-exhibitions">

      <h1 className="page-title">Nos expositions</h1>

      {/* Showcase of all the picture included in the exhibiton */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {list.map((exhibition) => (
          <Col className="col-picture" key={exhibition.slug}>

            <Card className="text-white card-info">
              <Card.Img className="image-info" src={exhibition.picture} alt="Card image" />
              <Card.ImgOverlay className="exhibition-info">
                <Card.Title className="title-info">{exhibition.title}</Card.Title>
                <Card.Text className="description-info">Artistname</Card.Text>
                <Card.Text className="description-info">{exhibition.description}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default ExhibitionsList;

/*
<Card className="card-picture" >
  <Card.Img className="avatar" variant="top" src={exhibition.artist.avatar} alt={exhibition.artist.slug} />
  <Card.Img className="image-picture" src={picture.picture} alt={exhibition.slug} />
    <Card.Body className="body-picture">
      <Card.Title className="title">{title}</Card.Title>
      <Card.Title className="nickname">{artist.nickname}</Card.Title>
      <Card.Text className="description-picture">{exhibition.description}</Card.Text>
    </Card.Body>
</Card> */
