// Display several images in carousel on the Home page to promote the lastest exhibitions

import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './style.scss';

const HomeCarousel = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <section className="home-carousel">
      <Carousel fade className="carousel">
        {list.map((exhibition) => (
          <Carousel.Item key={exhibition.id} interval={4000}>
            <h1 className="carousel-title">{exhibition.title}</h1>
            <p className="carousel-artist">{exhibition.nickname}</p>
            <LinkContainer to={`/expositions/${exhibition.slug}`}>
              <img
                className="d-block w-100 image-cover"
                src={exhibition.picture}
                alt={exhibition.slug}
              />
            </LinkContainer>
            <Carousel.Caption className="carousel-caption">
              <p>{exhibition.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
