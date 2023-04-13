// Display several images in carousel on the Home page to promote the lastest exhibitions

// TODO Carousel.Item is the element to do do the filter with - we want to extract all the images from the array of object imageData
// so it might not be needed to have a component that deals only with the images

import Carousel from 'react-bootstrap/Carousel';
// import ImageCarousel from './ImageCarousel';

const HomeCarousel = () => (
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.pexels.com/photos/1727658/pexels-photo-1727658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
