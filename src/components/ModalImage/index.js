import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModalImage, setModalImageInfos } from 'src/actions/modals';

import Image from 'react-bootstrap/Image';

import './styles.scss';

const ModalImage = () => {
  const [imgWidth, setImgWidth] = useState(40);
  const { isModalImageOpened, modalImageInfos } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const closeImgModal = () => {
    dispatch(setModalImageInfos({}));
    dispatch(toggleModalImage(false));
    setImgWidth(40);
  };

  const handleZoom = (event) => {
    const delta = Math.sign(event.deltaY);
    const zoomStep = 5;
    const minZoom = 40;
    const maxZoom = 100;
    const newImgWidth = imgWidth + (delta * zoomStep);
    if (newImgWidth >= minZoom && newImgWidth <= maxZoom) {
      setImgWidth(newImgWidth);
    }
  };

  return (
    <div
      id="myModal"
      className="modalPicture"
      style={{ display: isModalImageOpened ? 'block' : 'none' }}
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
    </div>
  );
};

export default ModalImage;
