import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

import './style.scss';

// Display several images in carousel on the Home page to promote the lastest exhibitions
const HomeCarousel = () => {
  const exhibitions = useSelector((state) => state.exhibitions);
  const list = Array.isArray(exhibitions.list) ? exhibitions.list : [];
  const isExhibitionsLoaded = exhibitions.isExhibitionsLoaded;

  // Si la liste est vide ou n'est pas un tableau, afficher un message de chargement
  if (list.length === 0) {
    return (
      <section className="sectionCarousel d-flex justify-content-center align-items-center">
        {!isExhibitionsLoaded && (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Chargement...</span>
            </Spinner>
            <p className="mt-2">Chargement des expositions...</p>
          </div>
        )}
        {isExhibitionsLoaded && (
          <p>Aucune exposition disponible pour le moment.</p>
        )}
      </section>
    );
  }

  return (
    <section className="sectionCarousel">
      <Carousel fade interval={5000}>
        {list.map((exhibition) => (
          exhibition && exhibition.artwork && exhibition.artwork.length !== 0
          && (
          <Carousel.Item key={exhibition.id}>
            <h1 className="carousel-title">{exhibition.title}</h1>
            <h2 className="carousel-artist">{exhibition.artist?.nickname || 'Artiste'}</h2>
            <p className="carousel-description">{exhibition.description ? `${exhibition.description.split(/[.]/)[0]}...` : ''}</p>
            <LinkContainer to={`/expositions/${exhibition.slug}`}>
              <Image
                className="carousel-image"
                src={exhibition.artwork[0].picture}
                alt={exhibition.artwork[0].slug}
              />
            </LinkContainer>
          </Carousel.Item>
          )
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
