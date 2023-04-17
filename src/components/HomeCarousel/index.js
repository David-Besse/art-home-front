// Display several images in carousel on the Home page to promote the lastest exhibitions

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

import './style.scss';

const HomeCarousel = () => {
  const { list } = useSelector((state) => state.exhibitions);
  return (
    <section className="home-carousel">
      <Carousel fade className="carousel">
        {list.map((exhibition) => (
          <Carousel.Item key={exhibition.id}>
            <h1 className="carousel-title">{exhibition.title}</h1>
            <p className="carousel-artist">Cécile Anssieux</p>
            <a href={`/exhibitons/${exhibition.slug}`}>
              <img
                className="d-block w-100 image-cover"
                src={exhibition.picture}
                alt={exhibition.slug}
              />
            </a>
            <Carousel.Caption className="carousel-caption">
              {/* <h2>DESCRIPTION</h2> */}
              <p>{exhibition.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

HomeCarousel.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

HomeCarousel.defaultProps = {
  list: null,
};

export default HomeCarousel;
