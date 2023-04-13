import Carousel from 'react-bootstrap/Carousel';
// import imageData from './imageData';

function CarouselFadeExample() {
  return (
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
          src="https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-cover"
          src="https://images.pexels.com/photos/6487189/pexels-photo-6487189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-cover"
          src="https://images.pexels.com/photos/1727658/pexels-photo-1727658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-cover"
          src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
