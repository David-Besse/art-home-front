import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import './style.scss';

const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <div className="all-exhibitions d-flex flex-column">

      <h1 className="page-title my-3">NOS EXPOSITIONS</h1>

      {/* Showcase of all the picture included in the exhibiton */}
      <div className="mb-4 d-flex flex-wrap justify-content-around exhibition-container">
        {list.map((exhibition) => (
          <LinkContainer to={`/expositions/${exhibition.slug}`} key={exhibition.slug}>
            <Card className="text-white card-info">
              <Card.Img className="image-info" src={exhibition.picture} alt={exhibition.slug} />
              <Card.Body className="exhibition-info">
                <Card.Title className="title-info">{exhibition.title}</Card.Title>
                <Card.Text className="nickname-info">{exhibition.nickname}</Card.Text>
                <Card.Text className="description-info">{exhibition.description}</Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        ))}
      </div>

    </div>
  );
};

export default ExhibitionsList;
