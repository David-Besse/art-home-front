import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

import './style.scss';

const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <div className="exhibition">

      {/* Showcase of all the picture included in the exhibiton */}
      <Row xs={1} md={1} lg={2} className="g-4">
        {list.map((exhibition) => (
          <Col className="col-picture" key={exhibition.slug}>

            <Card className="bg-dark text-white">
              <Card.Img src="holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
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
