// Show an image from the data

import imageData from './imageData';

const ImageCarousel = () => {
  // eslint-disable-next-line arrow-body-style
  imageData.filter((artwork) => {
    return (
      <img
        className="d-block w-100 image-cover"
        src={artwork.image}
        alt="First slide"
      />
    );
  });
};

export default ImageCarousel;
