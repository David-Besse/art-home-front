import { useDispatch, useSelector } from 'react-redux';
import { submitNewExhibition, changeLoginField } from 'src/actions/users';
import { toggleAccountCreationModal } from 'src/actions/modals';
import { fetchUserArtworks, updateUserArtwork } from 'src/actions/exhibitions';
import {
  Button,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  Modal,
} from 'react-bootstrap';

const ExhibitionsManager = () => {
  const { isAccountCreationModalOpened } = useSelector((state) => state.modals);
  const { exhibitions, exhibitionName, exhibitionDescription } = useSelector(
    (state) => state.users,
  );
  const { artworks } = useSelector((state) => state.exhibitions);

  const dispatch = useDispatch();
  const handleLogModal = () => dispatch(toggleAccountCreationModal());
  const handleSubmitNewExhibition = () => dispatch(submitNewExhibition());
  const handleUpdateArtwork = (artworkId, data) => dispatch(updateUserArtwork(artworkId, data));
  const changeField = (newValue, fieldName) => dispatch(changeLoginField(newValue, fieldName));

  const handleSubmitExhibition = (event) => {
    event.preventDefault();
    handleLogModal();
    handleSubmitNewExhibition();
  };

  const handleShowExhibition = (id) => {
    dispatch(fetchUserArtworks(id));
  };

  const handleSubmitArtwork = (event, artworkId) => {
    event.preventDefault();
    const formData = new FormData(event.target); // we create a new object FormData
    const data = Object.fromEntries(formData.entries()); // we retrieved data from formData
    handleUpdateArtwork(artworkId, data);
  };

  return (
    <section className="mx-3 mb-3 mt-5">
      {/**
       * Modal for creating an exhibition
       */}
      <Modal
        show={isAccountCreationModalOpened}
        onHide={handleLogModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Créer une exposition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitExhibition} className="text-center">
            <Form.Group className="mb-3" controlId="inputExhibitionName">
              <FloatingLabel label="Nom de l'exposition" className="mb-3">
                <Form.Control
                  type="text"
                  autoFocus
                  required
                  placeholder="Nom de l'exposition"
                  value={exhibitionName}
                  onChange={(evt) => {
                    changeField(evt.target.value, 'exhibitionName');
                  }}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputExhibitionDescription">
              <FloatingLabel label="Description">
                <Form.Control
                  as="textarea"
                  rows="3"
                  required
                  placeholder="Description"
                  value={exhibitionDescription}
                  onChange={(evt) => {
                    changeField(evt.target.value, 'exhibitionDescription');
                  }}
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/**
       * Show exhibition management
       */}
      <div className="allExhibitions">
        <div className="mt-3 mb-3 border-top border-bottom">
          <div className="d-flex justify-content-between">
            <h3 className="mb-3 my-3">Mes expositions</h3>

            {/**
            * button to select an exhibition
            */}
            <DropdownButton
              variant="secondary"
              id="selectExhibition"
              title="Voir une exposition"
              className="my-3"
              size="sm"
            >
              {exhibitions.length > 0
              && (
                exhibitions.map((exhibition) => (
                  <Dropdown.Item
                    as="button"
                    key={exhibition.id}
                    className="dropdown-item fst-italic"
                    onClick={() => handleShowExhibition(exhibition.id)}
                  >
                    {exhibition.title}
                  </Dropdown.Item>
                ))
              )}
              {exhibitions.length === 0
              && (
                <Dropdown.Item
                  as="button"
                  key="noExhibitions"
                  className="dropdown-item fst-italic"
                >
                  Aucunes oeuvres trouvées.
                </Dropdown.Item>
              )}
            </DropdownButton>
          </div>
          <div>
            {/**
          * button to manage the modal for creating an exhibition
          */}
            <Button variant="primary" onClick={handleLogModal} className="my-3">
              Créer une exposition
            </Button>
          </div>
        </div>

        <div className="mb-3 d-flex flex-wrap g-0 justify-content-center">
          {artworks.length > 0
          && artworks.map((artwork) => (
            <Form className="mb-3 col-lg-6" key={artwork.id} onSubmit={(event) => handleSubmitArtwork(event, artwork.id)}>
              <div className="card p-2 border-0 border-top">
                <div className="row g-0">

                  <div className="col-lg-4 d-flex flex-column align-items-center justify-content-start">
                    <img
                      src={artwork.picture}
                      className="img-fluid rounded-start img-avatar"
                      alt="artwork"
                    />
                    <Form.Group>
                      <Form.Control
                        defaultValue={artwork.picture}
                        type="text"
                        className="mt-2"
                        id={`inputPicture_${artwork.id}`}
                        name="picture"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-body py-0">
                      <p className="card-text fw-bold mb-0">
                        Titre de l'oeuvre :{' '}
                        <span
                          className={
                          artwork.title === ''
                            ? 'fw-normal text-muted fst-italic fw-lighter'
                            : 'fw-normal fst-italic fw-lighter'
                      }
                        >
                          {artwork.title === '' ? 'non communiqué' : artwork.title}
                        </span>
                      </p>
                      <Form.Group>
                        <Form.Control
                          defaultValue={artwork.title}
                          type="text"
                          className="mb-3"
                          id={`inputTitle_${artwork.id}`}
                          name="title"
                        />
                      </Form.Group>

                      <p className="card-text fw-bold mb-0">
                        Résumé de l'oeuvre :{' '}
                        <span
                          className={
                          artwork.description === ''
                            ? 'fw-normal text-muted fst-italic fw-lighter'
                            : 'fw-normal fst-italic fw-lighter'
                      }
                        >
                          {artwork.description === '' ? 'non communiqué' : artwork.description}
                        </span>
                      </p>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          defaultValue={artwork.description}
                          className="mb-3"
                          id={`inputDescription_${artwork.id}`}
                          name="description"
                        />
                      </Form.Group>

                      <Form.Group controlId="selectExhibition" className="mb-3">
                        <Form.Label className="fw-bold">Sélectionner une exposition pour cette oeuvre :</Form.Label>
                        <Form.Control as="select" size="sm" name="exhibition" required>
                          <option key="noExhibitions" value="0" disabled> </option>
                          {exhibitions.length > 0
                              && (
                                exhibitions.map((exhibition) => (
                                  <option
                                    key={exhibition.id}
                                    value={exhibition.id}
                                    defaultValue={exhibition.id === 1}
                                  >
                                    {exhibition.title}
                                  </option>
                                ))
                              )}
                        </Form.Control>
                      </Form.Group>

                    </div>
                  </div>
                  <div className="col-lg-2 text-end">
                    <Button type="submit">Editer</Button>
                  </div>
                </div>
              </div>
            </Form>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExhibitionsManager;
