import Page from 'src/components/Page';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Error404 from './Error404';

const Error = () => (
  <Page>
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Error404 />
      <h1>Erreur</h1>
      <p>Nous sommes désolé, Une erreur s'est produite.</p>
      <LinkContainer to="/">
        <Button className="button">Retour vers la page d'accueil</Button>
      </LinkContainer>
    </div>
  </Page>
);

export default Error;
