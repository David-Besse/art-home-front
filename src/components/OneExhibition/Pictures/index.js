import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorites, removeFavorites, submitProfileUpdate } from 'src/actions/users';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { findExhibition } from 'src/selectors/findExhibition';

import ArtistPresentation from '../ArtistPresentation';

import './styles.scss';

// Component gathering all informations needed (show artist information, exhibiton information and all artworks related to the exhibition)
const Pictures = () => {
  const { slug } = useParams();
  const {
    title, artwork, artist, description,
  } = useSelector((state) => findExhibition(state.exhibitions.list, slug));
  const { favorites, logged } = useSelector((state) => state.users);

  // manage artist modal
  const [modalShow, setModalShow] = useState(false);

  // manage img modal
  const [showImgModal, setShowImgModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imgWidth, setImgWidth] = useState(40);

  const dispatch = useDispatch();

  const handleFavorites = (pictureId) => {
    if (favorites.includes(pictureId)) {
      dispatch(removeFavorites(pictureId));
    }
    else {
      dispatch(addFavorites(pictureId));
    }
    dispatch(submitProfileUpdate());
  };

  const OpenImgModal = (image) => {
    setSelectedImage(image);
    setShowImgModal(true);
  };

  const closeImgModal = () => {
    setSelectedImage('');
    setShowImgModal(false);
    setImgWidth(40);
  };

  const handleZoom = (event) => {
    const delta = Math.sign(event.deltaY);
    const zoomStep = 10;
    const minZoom = 50;
    const maxZoom = 100;

    const newImgWidth = imgWidth + (delta * zoomStep);

    if (newImgWidth >= minZoom && newImgWidth <= maxZoom) {
      setImgWidth(newImgWidth);
    }
  };

  return (
    <div className="exhibition">

      {/* Information about the exhibition */}
      <Card className="card-exhibition">
        <Card.Body className="body-exhibition">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="nickname">{artist.nickname}</Card.Text>
          <Card.Text className="description">{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Presentation of the artist who created the exhibition */}
      <div className="artist-button">
        <Button className="button customButton" onClick={() => setModalShow(true)}>
          Pour en savoir plus sur {artist.nickname}
        </Button>
      </div>
      <ArtistPresentation show={modalShow} onHide={() => setModalShow(false)} />

      {/* Showcase of all the picture included in the exhibiton */}
      <section className="picture-list">
        {artwork.map((picture) => (
          <Card className="card-picture" key={picture.slug}>
            <Card.Img className="image-picture" src={picture.picture} alt={picture.slug} onClick={() => OpenImgModal(picture.picture)} />
            <div className="heart-icon" onClick={() => handleFavorites(picture.id)}>
              {logged && !favorites.includes(picture.id) && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              )}
              {logged && favorites.includes(picture.id) && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
              )}
            </div>
            <Card.Body className="body-picture px-0">
              <Card.Title className="title-picture">{picture.title}</Card.Title>
              <Card.Text className="description-picture">{picture.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>

      {/* Modal for displaying the selected image */}
      <div
        id="myModal"
        className="modal"
        style={{ display: showImgModal ? 'block' : 'none' }}
      >

        <span
          className="close"
          onClick={closeImgModal}
        >&times;
        </span>

        <Image
          src={selectedImage}
          alt={selectedImage}
          className="modal-content"
          onWheel={handleZoom}
          style={{ width: `${imgWidth}%` }}
          fluid
          rounded
        />

      </div>
    </div>
  );
};

export default Pictures;
