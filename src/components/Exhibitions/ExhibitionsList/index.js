import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import './style.scss';
import { Link } from 'react-router-dom';


// exhibitions page
const ExhibitionsList = () => {
  const { list } = useSelector((state) => state.exhibitions);

  useEffect(() => {
    const handleCardClick = () => {
      window.scrollTo(0, 0);
    };

    const cards = document.getElementsByClassName('cardLink');
    Array.from(cards).forEach((card) => {
      card.addEventListener('click', handleCardClick);
    });

    return () => {
      Array.from(cards).forEach((card) => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, []);

  return (
    <div className="all-exhibitions">

      <h1 className="page-title mb-5 mt-3">NOS EXPOSITIONS</h1>

      {/* Showcase of all exhibitions */}
      <div className="exhibition-container mb-4">
        {list.map((exhibition) => (
          exhibition.artwork.length !== 0
          && (
          <Link to={`/expositions/${exhibition.slug}`} key={exhibition.slug} className="cardLink text-decoration-none">
            <Card className="text-white card-info">
              <Card.Img className="image-info" src={exhibition.artwork[0].picture} alt={exhibition.artwork[0].slug} />
              <Card.Title className="text-center title-info">{exhibition.title}</Card.Title>
              <Card.Text className="text-center nickname-info">{exhibition.nickname}</Card.Text>
              <Card.Body className="exhibition-info">
                <Card.Text className="description-info">{exhibition.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          )
        ))}
      </div>

    </div>
  );
};

export default ExhibitionsList;
