import { useDispatch, useSelector } from 'react-redux';

import { submitNewExhibition, changeInputField } from 'src/actions/users';
import { toggleExhibitionCreationModal, toggleArtworkCreationModal } from 'src/actions/modals';
import {
  fetchUserArtworks, updateUserArtwork, submitNewArtwork, deleteUserArtwork,
} from 'src/actions/exhibitions';
import { showSelectedExhibition, toggleArtworkEditing } from 'src/actions/profile';

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

// show informations about the connected user
const ExhibitionsManager = () => {
  const { isAccountCreationModalOpened, isArtworkCreationModalOpened } = useSelector((state) => state.modals);
  const { exhibitions, exhibitionName, exhibitionDescription } = useSelector((state) => state.users);
  const { artworks, isArtworksLoading } = useSelector((state) => state.exhibitions);
  const { selectedExhibitionId, isArtworkEditingActivated } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const { artworkFormActivated, isFormActivated } = isArtworkEditingActivated;

  const currentExhibition = exhibitions.find((exhib) => exhib.id === selectedExhibitionId);

  const handleArtworkEditing = (formId) => {
    dispatch(toggleArtworkEditing(formId));
  };
  const handleExhibitionCreationModal = () => {
    dispatch(toggleExhibitionCreationModal());
  };
  const handleArtworkCreationModal = () => {
    dispatch(toggleArtworkCreationModal());
  };
  const handleShowExhibition = (id) => {
    dispatch(showSelectedExhibition(id));
    dispatch(fetchUserArtworks(id));
  };
  const handleUpdateUserArtwork = (artworkId, data) => {
    dispatch(updateUserArtwork(artworkId, data));
  };
  const changeField = (newValue, fieldName) => {
    dispatch(changeInputField(newValue, fieldName));
  };

  const handleSubmitExhibition = (event) => {
    event.preventDefault();

    handleExhibitionCreationModal();

    dispatch(submitNewExhibition());
  };

  const compareChangedFields = (elOne, elTwo) => Object.keys(elOne).filter((key) => elOne[key] !== elTwo[key]);

  // handle update artwork
  const handleUpdateArtwork = (event, artwork) => {
    event.preventDefault();

    // we create a new object FormData and retrieve data
    const formData = new FormData(event.target);
    const updateArtwork = Object.fromEntries(formData.entries());

    const currentArtwork = {
      title: artwork.title, description: artwork.description, picture: artwork.picture, exhibition: (artwork.exhibition.id).toString(),
    };

    const result = compareChangedFields(updateArtwork, currentArtwork);

    if (result.length > 0) {
      handleUpdateUserArtwork(artwork.id, updateArtwork);

      // workaround: sometimes, state doesnt refresh...
      dispatch(fetchUserArtworks(selectedExhibitionId));
      dispatch(fetchUserArtworks(selectedExhibitionId));
    }

    handleArtworkEditing('');
  };

  const handleSubmitNewArtwork = (event) => {
    event.preventDefault();

    // we create a new object FormData and retrieve data
    const formData = new FormData(event.target);
    const newArtwork = Object.fromEntries(formData.entries());

    handleArtworkCreationModal();

    dispatch(submitNewArtwork(newArtwork));
  };

  const handleDeleteArtwork = (event, artworkId) => {
    event.preventDefault();

    dispatch(deleteUserArtwork(artworkId));
  };

  return (
    <section className="exhibitionManager">
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
              <FloatingLabel label="Description de l'exposition">
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                  required
                  placeholder="Description de l'exposition"
                  value={exhibitionDescription}
                  onChange={(evt) => {
                    changeField(evt.target.value, 'exhibitionDescription');
                  }}
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit" className="customButton">Soumettre</Button>
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
          <Form onSubmit={(event) => handleSubmitNewArtwork(event)}>
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
                  style={{ height: '150px' }}
                  placeholder="Description de l'oeuvre"
                  name="description"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="selectExhibition">
              <FloatingLabel label="Choisir une exposition">
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
              </FloatingLabel>
            </Form.Group>
            <Button type="submit" className="customButton">Soumettre</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/**
       * Show exhibition management
       */}
      <div className="allExhibitions justify-content-center">
        <div className="mt-3 mb-3">
          <div className="d-flex justify-content-between">
            <h3 className="mb-3 my-3 fw-bolder">Gestionnaire d'expositions</h3>
            <div className="d-flex">

              {/**
               * button to manage the modal for creating an exhibition
               */}
              <Button
                variant="primary"
                onClick={handleExhibitionCreationModal}
                className="my-3 me-3 d-none d-sm-block customButton"
              >
                Créer une exposition
              </Button>
              <Button
                variant="primary"
                onClick={handleExhibitionCreationModal}
                className="my-3 me-3 d-block d-sm-none customButton"
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
                    className="my-3 d-none d-sm-block customButton"
                  >
                    Ajouter une oeuvre
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleArtworkCreationModal}
                    className="my-3 d-block d-sm-none customButton"
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
              className="d-flex"
              variant="secondary"
              id="selectExhibition"
              title={(
                <>
                  {isArtworksLoading
                  && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                  )}
                  {(exhibitions.length > 0
                    ? ' Voir une exposition'
                    : ' Aucune exposition trouvée')}
                </>
              )}
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

          </div>
          <div className="d-flex flex-column justify-content-center mb-3 border-top">
            <h2 className="pt-5 pb-2 px-1 text-center exhibitionTitle">
              {currentExhibition
            && currentExhibition.title}
            </h2>
            <p className="py-1 px-1 text-center exhibitionDescription">
              {currentExhibition
                  && currentExhibition.description}
            </p>
          </div>
        </div>

        <div className="artworks-zone mb-3 d-flex flex-wrap">
          {artworks.length > 0
            && artworks.map((artwork) => (
              <Form
                className="artwork-box my-2 my-lg-0 col-lg-6"
                key={artwork.id}
                onSubmit={(event) => handleUpdateArtwork(event, artwork)}
                id={artwork.id}
              >
                <div className="card p-2 border h-100">
                  <div className="row g-0 cardContainer">
                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={artwork.picture}
                        className="img-fluid rounded artwork-image"
                        alt="artwork"
                      />
                      {isFormActivated && artworkFormActivated === artwork.id && (
                        <Form.Group>
                          <Form.Control
                            defaultValue={artwork.picture}
                            type="text"
                            className="mt-2"
                            id={`inputPicture_${artwork.id}`}
                            name="picture"
                          />
                        </Form.Group>
                      )}
                    </div>

                    <div className="col-lg-6 mt-3 mt-lg-0 d-flex align-items-center">
                      <div className="card-body py-0">

                        <p className="card-text fw-bold mb-0">
                          Titre de l'oeuvre :{' '}
                          <span
                            className={
                              artwork.title === ''
                                ? ' text-muted fst-italic fw-lighter'
                                : ' fst-italic fw-lighter'
                            }
                          >
                            {artwork.title === ''
                              ? 'non communiqué'
                              : artwork.title}
                          </span>
                        </p>
                        {isFormActivated && artworkFormActivated === artwork.id && (
                        <Form.Group>
                          <Form.Control
                            defaultValue={artwork.title}
                            type="text"
                            className="mb-3"
                            id={`inputTitle_${artwork.id}`}
                            name="title"
                          />
                        </Form.Group>
                        )}

                        <p className="card-text fw-bold mb-0">
                          Résumé de l'oeuvre :{' '}
                          <span
                            className={
                              artwork.description === ''
                                ? ' text-muted fst-italic fw-lighter'
                                : ' fst-italic fw-lighter'
                            }
                          >
                            {artworkFormActivated !== artwork.id && (
                              artwork.description === ''
                                ? 'non communiqué'
                                : artwork.description)}
                          </span>
                        </p>
                        {isFormActivated && artworkFormActivated === artwork.id && (
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
                        )}

                        <p className="card-text fw-bold mb-0">
                          Exposition :{' '}
                          <span
                            className={
                              artwork.exhibition.title === ''
                                ? ' text-muted fst-italic fw-lighter'
                                : ' fst-italic fw-lighter'
                            }
                          >
                            {artworkFormActivated !== artwork.id && (
                              artwork.exhibition.title === ''
                                ? 'non communiqué'
                                : artwork.exhibition.title
                            )}
                          </span>
                        </p>
                        {isFormActivated && artworkFormActivated === artwork.id && (
                        <Form.Group
                          controlId="selectExhibition"
                          className="mb-3"
                        >
                          <Form.Control
                            as="select"
                            size="sm"
                            name="exhibition"
                            defaultValue={artwork.exhibition.id}
                          >
                            {exhibitions.length > 0
                              && exhibitions.map((exhibition) => (
                                <option
                                  key={exhibition.id}
                                  value={exhibition.id}
                                >
                                  {exhibition.title}
                                </option>
                              ))}
                          </Form.Control>
                        </Form.Group>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-2 text-center d-flex flex-lg-column justify-content-end justify-content-lg-center align-items-lg-center">
                      {/* {EDIT BUTTON} */}
                      {!isFormActivated && (
                      <Button
                        type="button"
                        className="mb-lg-3 me-lg-0 mb-0 customButton"
                        variant="secondary"
                        onClick={() => handleArtworkEditing(artwork.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </Button>
                      )}
                      {isFormActivated && artworkFormActivated === artwork.id && (
                      <Button
                        type="submit"
                        id="validationBtn"
                        className="mb-lg-3 me-lg-0 mb-0 customButton"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                        </svg>
                      </Button>
                      )}
                      {/* {DELETE BUTTON} */}
                      {isFormActivated && artworkFormActivated === artwork.id && (
                      <Button
                        type="button"
                        variant="danger"
                        onClick={(event) => handleDeleteArtwork(event, artwork.id)}
                        className="ms-3 ms-lg-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            ))}
          {(exhibitions.length > 0 && artworks.length === 0)
          && (
            <p className="fst-italic">
              Aucunes oeuvres trouvées. Sélectionner une exposition.
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
