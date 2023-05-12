import { useSelector } from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';

import './style.scss';

// exhibitions page
const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <div className="all-exhibitions">

      <h1 className="page-title mb-5 mt-3">NOS EXPOSITIONS</h1>

      {/* Showcase of all exhibitions */}
      <div className="exhibition-container mb-4">
        {list.map((exhibition) => (
          <LinkContainer to={`/expositions/${exhibition.slug}`} key={exhibition.slug}>
            <Card className="text-white card-info">
              <Card.Img className="image-info" src={exhibition.artwork[0].picture} alt={exhibition.artwork[0].slug} />
              <Card.Title className="text-center title-info">{exhibition.title}</Card.Title>
              <Card.Text className="text-center nickname-info">{exhibition.nickname}</Card.Text>
              <Card.Body className="exhibition-info">
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
