import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './styles.scss';

// contact page
const Contact = () => (
  <>
    <Header />
    <Page>
      <div className="contact-page">
        <section className="contact-infos">
          {/* <h3>Nous contacter</h3> */}
          <p className="contact-intro">
            Nous sommes toujours ravis d'avoir de vos nouvelles. Si vous avez
            des questions, des commentaires ou des suggestions, n'hésitez pas à
            nous contacter !
          </p>
          <h4>Par email:</h4>
          <p>
            <strong>contact-art_home@gmail.com</strong><br />
            Nous ferons de notre mieux pour répondre à
            votre mail dans les plus brefs délais.
          </p>
          <h4>Par téléphone:</h4>
          <p>
            +33 01 23 45 67 89 <br />
            Notre service clientèle est
            disponible du lundi au vendredi de 9h à 18h. (hors jours fériés)
          </p>
          <h4>Par courrier:</h4>
          <p>Art@home <br />
            123 boulevard des oeuvres<br />
            75000 Paris France
          </p>
        </section>
      </div>
    </Page>
    <Footer />
  </>
);

export default Contact;
