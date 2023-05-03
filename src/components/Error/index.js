import { LinkContainer } from 'react-router-bootstrap';

import Page from 'src/components/Page';
import Button from 'react-bootstrap/Button';

import './styles.scss';

/* Error 404 page */

const Error = () => (
  <Page>
    <div className="error-div d-flex flex-column align-items-center justify-content-center">
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <h1 className="h1Error">Serait-ce un syndrome de la page blanche ?</h1>
      <LinkContainer to="/">
        <Button className="customButton" id="buttonError">Retourner vers la page d'accueil</Button>
      </LinkContainer>
    </div>
  </Page>
);

export default Error;
