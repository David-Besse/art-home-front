import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, submitNewExhibition } from 'src/actions/users';
import { toggleAccountCreationModal } from 'src/actions/modals';
import {
  Button, Dropdown, DropdownButton, FloatingLabel, Form, Modal,
} from 'react-bootstrap';

const ExhibitionsManager = () => {
  const { isAccountCreationModalOpened } = useSelector((state) => state.modals);
  const { exhibitions, exhibitionName, exhibitionDescription } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleLogModal = () => dispatch(toggleAccountCreationModal());
  const changeField = (newValue, name) => dispatch(changeLoginField(newValue, name));
  const handleSubmitNewExhibition = () => dispatch(submitNewExhibition());

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitNewExhibition();
    handleLogModal();
  };

  return (
    <>
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
          <Modal.Title id="contained-modal-title-vcenter">Créer une exposition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="text-center">
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
       * button to manage the modale for creating an exhibition
       */}
      <Button
        variant="primary"
        onClick={handleLogModal}
        className="my-3 mx-3"
      >
        Créer une exposition
      </Button>

      {/**
        * button to select an exhibition
        */}
      <DropdownButton
        variant="secondary"
        id="selectExhibition"
        drop="end"
        title="Voir une exposition"
        className="mx-3 mb-3"
        size="sm"
      >
        {
            (exhibitions.length > 0)
              ? exhibitions.map((exhibition) => (
                <Dropdown.Item as="button" key={exhibition.id} className="dropdown-item fst-italic" href="#">
                  {exhibition.title}
                </Dropdown.Item>
              ))
              : (
                <Dropdown.Item as="button" key="noExhibitions" className="dropdown-item fst-italic" href="#">
                  vide
                </Dropdown.Item>
              )
          }
      </DropdownButton>
    </>
  );
};

export default ExhibitionsManager;
