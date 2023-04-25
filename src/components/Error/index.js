import Page from 'src/components/Page';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const Error = () => (
  <Page>
    <div>
      <h1>Erreur</h1>
      <p>Nous sommes désolé, Une erreur s'est produite.</p>
      <LinkContainer to="/">
        <Button>Retour vers la page d'accueil</Button>
      </LinkContainer>
    </div>
  </Page>
);

export default Error;
