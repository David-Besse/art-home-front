import { useDispatch, useSelector } from 'react-redux';
import { submitNewExhibition, changeLoginField } from 'src/actions/users';
import {
  toggleExhibitionCreationModal,
  toggleArtworkCreationModal,
} from 'src/actions/modals';
import {
  fetchUserArtworks, updateUserArtwork, submitNewArtwork, deleteUserArtwork,
} from 'src/actions/exhibitions';
import {
  Button,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  Modal,
  Spinner,
} from 'react-bootstrap';

import './styles.scss';

const ExhibitionsManager = () => {
  const { isAccountCreationModalOpened, isArtworkCreationModalOpened } = useSelector((state) => state.modals);
  const { exhibitions, exhibitionName, exhibitionDescription } = useSelector(
    (state) => state.users,
  );
  const { artworks, isArtworksLoading } = useSelector((state) => state.exhibitions);

  const dispatch = useDispatch();
  const handleExhibitionCreationModal = () => dispatch(toggleExhibitionCreationModal());
  const handleArtworkCreationModal = () => dispatch(toggleArtworkCreationModal());
  const handleUpdateArtwork = (artworkId, data) => dispatch(updateUserArtwork(artworkId, data));
  const changeField = (newValue, fieldName) => dispatch(changeLoginField(newValue, fieldName));

  const handleSubmitExhibition = (event) => {
    event.preventDefault();
    handleExhibitionCreationModal();
    dispatch(submitNewExhibition());
  };

  const handleShowExhibition = (id) => {
    dispatch(fetchUserArtworks(id));
  };

  const handleSubmitArtwork = (event, artworkId) => {
    event.preventDefault();
    const formData = new FormData(event.target); // we create a new object FormData
    const updateArtwork = Object.fromEntries(formData.entries()); // we retrieved data from formData
    handleUpdateArtwork(artworkId, updateArtwork);
  };

  const handleSubmitNewArtwork = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // we create a new object FormData
    const newArtwork = Object.fromEntries(formData.entries()); // we retrieved data from formData
    dispatch(submitNewArtwork(newArtwork));
  };

  return (
    <section className="mb-3 mt-5 exhibitionManager">
      {/**
       * Modal for creating an exhibition
       */}
      <Modal
        show={isAccountCreationModalOpened}
        onHide={handleExhibitionCreationModal}
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
       * Modal for adding an artwork
       */}
      <Modal
        show={isArtworkCreationModalOpened}
        onHide={handleArtworkCreationModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ajouter une oeuvre
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitNewArtwork} className="text-center">
            <Form.Group className="mb-3" controlId="inputExhibitionName">
              <FloatingLabel label="Titre de l'oeuvre" className="mb-3">
                <Form.Control
                  type="text"
                  autoFocus
                  required
                  placeholder="Titre de l'oeuvre"
                  name="title"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputExhibitionName">
              <FloatingLabel label="URL de l'oeuvre" className="mb-3">
                <Form.Control
                  type="text"
                  required
                  placeholder="URL de l'oeuvre"
                  name="picture"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputArtworkDescription">
              <FloatingLabel label="Description de l'oeuvre">
                <Form.Control
                  as="textarea"
                  rows="3"
                  required
                  placeholder="Description de l'oeuvre"
                  name="description"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="selectExhibition">
              <Form.Label>Choisir une exposition</Form.Label>
              <Form.Control
                as="select"
                disabled={!exhibitions.length}
                name="exhibition"
              >
                {exhibitions.map((exhibition) => (
                  <option key={exhibition.id} value={exhibition.id}>
                    {exhibition.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button type="submit">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/**
       * Show exhibition management
       */}
      <div className="allExhibitions justify-content-center">
        <div className="mt-3 mb-3 border-top">
          <div className="d-flex justify-content-between">
            <h3 className="mb-3 my-3 fw-bolder">Mes expositions</h3>
            <div className="d-flex">

              {/**
               * button to manage the modal for creating an exhibition
               */}
              <Button
                variant="primary"
                onClick={handleExhibitionCreationModal}
                className="my-3 me-3 d-none d-sm-block"
              >
                Créer une exposition
              </Button>
              <Button
                variant="primary"
                onClick={handleExhibitionCreationModal}
                className="my-3 me-3 d-block d-sm-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-easel2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z" />
                </svg>
              </Button>

              {/**
               * button to manage the modal for adding an artwork
               */}
              {exhibitions.length > 0 && (
                <>
                  <Button
                    variant="primary"
                    onClick={handleArtworkCreationModal}
                    className="my-3 d-none d-sm-block"
                  >
                    Ajouter une oeuvre
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleArtworkCreationModal}
                    className="my-3 d-block d-sm-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                      <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                    </svg>
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="d-flex flex-raw mb-3">
            {/**
             * button to select an exhibition
             */}
            <DropdownButton
              variant="primary"
              id="selectExhibition"
              title={
                exhibitions.length > 0
                  ? 'Voir une exposition'
                  : 'Aucune exposition trouvée'
              }
              disabled={exhibitions.length === 0}
              size="sm"
            >
              {exhibitions.length > 0
                && exhibitions.map((exhibition) => (
                  <Dropdown.Item
                    as="button"
                    key={exhibition.id}
                    className="dropdown-item fst-italic"
                    onClick={() => handleShowExhibition(exhibition.id)}
                  >
                    {exhibition.title}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
            {' '}
            {isArtworksLoading
              && (
                <>
                  <Spinner variant="primary" animation="grow" size="sm" />
                  <Spinner variant="primary" animation="grow" />
                  <Spinner variant="primary" animation="grow" size="sm" />
                  <Spinner variant="primary" animation="grow" />
                </>
              )}
          </div>
        </div>

        <div className="mb-3 d-flex flex-wrap g-0">
          {artworks.length > 0
            && artworks.map((artwork) => (
              <Form
                className="my-3 col-lg-6"
                key={artwork.id}
                onSubmit={(event) => handleSubmitArtwork(event, artwork.id)}
              >
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
                            {artwork.title === ''
                              ? 'non communiqué'
                              : artwork.title}
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
                            {artwork.description === ''
                              ? 'non communiqué'
                              : artwork.description}
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

                        <Form.Group
                          controlId="selectExhibition"
                          className="mb-3"
                        >
                          <Form.Label className="fw-bold">
                            Sélectionner une exposition pour cette oeuvre :
                          </Form.Label>
                          <Form.Control
                            as="select"
                            size="sm"
                            name="exhibition"
                            required
                          >
                            {exhibitions.length > 0
                              && exhibitions.map((exhibition) => (
                                <option
                                  key={exhibition.id}
                                  value={exhibition.id}
                                  defaultValue={exhibition.id === 1}
                                >
                                  {exhibition.title}
                                </option>
                              ))}
                          </Form.Control>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <Button type="submit" className="mb-3">Editer</Button>
                      <Button
                        type="button"
                        variant="danger"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          dispatch(deleteUserArtwork(artwork.id));
                        }}
                      >Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            ))}
          {(exhibitions.length > 0 && artworks.length === 0)
          && (
            <p className="fst-italic">
              Sélectionner une exposition pour voir son contenu.
            </p>
          )}
          {exhibitions.length === 0
          && (
            <p className="fw-semibold fs-6">
              Commencer par créer une nouvelle exposition !
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsManager;
