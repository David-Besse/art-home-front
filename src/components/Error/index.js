import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

const Error = () => (
  <>
    <Header />
    <Page>
      <div>
        <h1>Erreur</h1>
        <p>Nous sommes désolé, Une erreur s'est produite.</p>
      </div>
    </Page>
    <Footer />
  </>
);

export default Error;
