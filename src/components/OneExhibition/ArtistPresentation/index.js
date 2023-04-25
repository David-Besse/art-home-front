import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ArtistPresentation = () => {
  const { slug } = useParams();
  const { artist } = useSelector((state) => findExhibition(state.pictures.list, slug));

  return (
    <Card className="card-artist">
      <Card.Img className="avatar" variant="top" src={artist.avatar} alt={artist.slug} />
      <Card.Body className="body-artist">
        <Card.Title className="nickname">{artist.nickname}</Card.Title>
        <Card.Text className="realname">{artist.firstname} {artist.lastname}</Card.Text>
        <Card.Text className="presentation">{artist.presentation}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtistPresentation;


/* 


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {artist.nickname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img {artist.avatar} alt={artist.slug}
        <h3>{artist.firstname} {artist.lastname}</h3>
        <p>{artist.presentation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />); */
