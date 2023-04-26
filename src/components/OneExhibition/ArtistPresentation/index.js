import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './styles.scss';

const ArtistPresentation = (props) => {
  const { slug } = useParams();
  const { artist } = useSelector((state) => findExhibition(state.pictures.list, slug));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="artist-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="nickname">{artist.nickname}</Modal.Title> {/*  might need a condition in the cases where the artiste doesn't have a pseudo */}
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <img src={artist.avatar} alt={artist.slug} className="avatar" />
        <h3 className="realname">de son véritable nom {artist.firstname} {artist.lastname}</h3>
        <p className="presentation">{artist.presentation}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button className="button" onClick={props.onHide}>Retour à l'exposition</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtistPresentation;
