import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import findExhibition from 'src/selectors/findExhibition';

import './styles.scss';

// modal for artist presentation
const ArtistPresentation = (props) => {
  const { slug } = useParams();

  const { artist } = useSelector((state) => findExhibition(state.exhibitions.list, slug));

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="artist-modal"
    >
      <Modal.Header closeButton className="d-flex">
        <Modal.Title id="contained-modal-title-vcenter" className="nickname">{artist.nickname !== '' ? artist.nickname : 'sans pseudo'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <img src={artist.avatar} alt={artist.slug} className="avatar" />
        <h3 className="realname">de son véritable nom {artist.firstname} {artist.lastname}</h3>
        <p className="presentation">&laquo; {artist.presentation} &raquo;</p>
        <p className="align-self-end fw-bold">{artist.email}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ArtistPresentation;
