// Display several images in carousel on the Home page to promote the lastest exhibitions

import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import './style.scss';

const HomeCarousel = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <section className="sectionCarousel">
      <Carousel fade interval={5000}>
        {list.map((exhibition) => (
          <Carousel.Item key={exhibition.id}>
            <h1 className="carousel-title">{exhibition.title}</h1>
            <p className="carousel-artist">{exhibition.nickname}</p>
            <LinkContainer to={`/expositions/${exhibition.slug}`}>
              <Image
                className="carousel-image"
                src={exhibition.picture}
                alt={exhibition.slug}
              />
            </LinkContainer>
            <Carousel.Caption>
              <p>{exhibition.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
