import Page from 'src/components/Page';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

import './styles.scss';

const Error = () => (
  <Page>
    <div className="d-flex flex-column align-items-center justify-content-center">
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <LinkContainer to="/">
        <Button className="button">Retour vers la page d'accueil</Button>
      </LinkContainer>
    </div>
  </Page>
);

export default Error;
