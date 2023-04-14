// Display several images in carousel on the Home page to promote the lastest exhibitions

// TODO Carousel.Item is the element to do do the filter with - we want to extract all the images from the array of object imageData
// so it might not be needed to have a component that deals only with the images

import Carousel from 'react-bootstrap/Carousel';
// import ImageCarousel from './ImageCarousel';
import './style.scss';

const HomeCarousel = () => (
  <Carousel fade className="carousel">
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
        src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80s"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.unsplash.com/photo-1580136608079-72029d0de130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 image-cover"
        src="https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
