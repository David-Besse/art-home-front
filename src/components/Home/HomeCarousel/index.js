import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import './style.scss';

// Display several images in carousel on the Home page to promote the lastest exhibitions
const HomeCarousel = () => {
  const { list } = useSelector((state) => state.exhibitions);

  return (
    <section className="sectionCarousel">
      <Carousel fade interval={5000}>
        {list.map((exhibition) => (
          exhibition.artwork.length !== 0
          && (
          <Carousel.Item key={exhibition.id}>
            <h1 className="carousel-title">{exhibition.title}</h1>
            <h2 className="carousel-artist">{exhibition.artist.nickname}</h2>
            <p className="carousel-description">{`${exhibition.description.split(/[.]/)[0]}...`}</p>
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
