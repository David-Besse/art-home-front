import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

const Error = () => (
  <Page>
    <Header />
    <main>
      <div>
        <h1>Erreur</h1>
        <p>Nous sommes désolé, Une erreur s'est produite.</p>
      </div>
    </main>
    <Footer />
  </Page>
);

export default Error;
