// TODO Carousel.Item is the element to do do the filter with - we want to extract all the images from the array of object imageData
// TODO so it might not be needed to have a component that deals only with the images

// Display several images in carousel on the Home page to promote the lastest exhibitions
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';

import './style.scss';

const HomeCarousel = ({ exhibitions }) => (
  <section className="home-carousel">
    <Carousel fade className="carousel">
      <h1>{exhibition.title}</h1>
      {exhibitions.map((exhibition) => (
        <Carousel.Item key={exhibition.id} {...exhibition}>
          <a href={`/exhibitons/${exhibition.slug}`}>
            <img
              className="d-block w-100 image-cover"
              src={exhibition.picture}
              alt={exhibition.slug}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
    <h2>DESCRIPTION</h2>
    <p>{exhibition.description}</p>
  </section>
);

HomeCarousel.propTypes = {
  exhibitions: PropTypes.arrayOf(
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
  exhibitions: null,
};

export default HomeCarousel;
