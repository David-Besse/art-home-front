import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModalImage, setModalImageInfos } from 'src/actions/modals';

import Image from 'react-bootstrap/Image';

import './styles.scss';

// modal which allows to see and zoom the image
const ModalImage = () => {
  // local state used isntead Redux state
  const [imgWidth, setImgWidth] = useState(40);

  const { isModalImageOpened, modalImageInfos } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalImageOpened) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body when the image modal is opened
    }
    else {
      document.body.style.overflow = 'auto'; // Enable scrolling on the body when the image modal is closed
    }
  }, [isModalImageOpened]);

  const closeImgModal = () => {
    dispatch(setModalImageInfos({}));
    dispatch(toggleModalImage(false));
    setImgWidth(40);
  };

  // Handles the zoom functionality when a scroll event occurs
  const handleZoom = (event) => {
    // Retrieves the scroll direction. If the scroll is downwards, delta will be -1; if upwards, delta will be 1.
    const delta = Math.sign(event.deltaY);

    const zoomStep = 5; // Specifies the amount of zoom to apply for each scroll step.

    const minZoom = 40; // Sets the minimum allowed zoom level.
    const maxZoom = 100; // Sets the maximum allowed zoom level.

    // Calculates the new image width based on the current image width, scroll direction, and zoom step.
    const newImgWidth = imgWidth + (delta * zoomStep);

    // Checks if the new image width is within the allowable zoom range and
    // updates the image width state variable with the new calculated width, triggering a re-render to apply the zoom effect.
    if (newImgWidth >= minZoom && newImgWidth <= maxZoom) {
      setImgWidth(newImgWidth);
    }
  };

  return (
    createPortal(
      <div
        id="myModal"
        className="modalPicture"
        style={{
          display: isModalImageOpened ? 'block' : 'none',
        }}
      >
        <span
          className="closePicture"
          onClick={closeImgModal}
        >&times;
        </span>
        <h3 className="titlePicture">{modalImageInfos.title}</h3>
        <Image
          src={modalImageInfos.picture}
          alt={modalImageInfos.title}
          className="modalPicture-content"
          onWheel={handleZoom}
          style={{ width: `${imgWidth}%` }}
          fluid
          rounded
        />
      </div>,
      document.body,
    )
  );
};

export default ModalImage;
