import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import './style.scss';

const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <div className="all-exhibitions mx-4 d-flex flex-column">

      <h1 className="page-title my-3">Nos expositions</h1>

      {/* Showcase of all the picture included in the exhibiton */}
      <div className="mb-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {list.map((exhibition) => (
            <Col className="col-picture d-flex justify-content-center p-0" key={exhibition.slug}>
              <Card className="text-white card-info">
                <LinkContainer to={`/expositions/${exhibition.slug}`}>
                  <Card.Img className="image-info" src={exhibition.picture} alt="Card image" />
                </LinkContainer>
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

    </div>
  );
};

export default ExhibitionsList;
