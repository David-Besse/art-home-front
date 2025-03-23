import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import './style.scss';
import { Link } from 'react-router-dom';

// exhibitions page
const ExhibitionsList = () => {
  const exhibitions = useSelector((state) => state.exhibitions);
  const list = Array.isArray(exhibitions.list) ? exhibitions.list : [];

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

  // Si la liste est vide ou n'est pas un tableau, afficher un message
  if (list.length === 0) {
    return (
      <div className="all-exhibitions">
        <h1 className="page-title mb-5 mt-3">NOS EXPOSITIONS</h1>
        
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement des expositions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="all-exhibitions">

      <h1 className="page-title mb-5 mt-3">NOS EXPOSITIONS</h1>

      {/* Showcase of all exhibitions */}
      <div className="exhibition-container mb-4">
        {list
          .filter((exhibition) => exhibition && exhibition.artwork && 
                  exhibition.artwork.length > 0 && 
                  exhibition.artwork.every((el) => el && el.status === true))
          .map((exhibition) => (
            <Link to={`/expositions/${exhibition.slug}`} key={exhibition.slug} className="cardLink text-decoration-none">
              <Card className="text-white card-info">
                <Card.Img className="image-info" src={exhibition.artwork[0].picture} alt={exhibition.artwork[0].slug} />
                <Card.Title className="text-center title-info">{exhibition.title}</Card.Title>
                <Card.Text className="text-center nickname-info">{exhibition.nickname || exhibition.artist?.nickname || 'Artiste'}</Card.Text>
                <Card.Body className="exhibition-info">
                  <Card.Text className="description-info">{exhibition.description || 'Pas de description disponible'}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
      </div>

    </div>
  );
};

export default ExhibitionsList;
