import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import ExhibitionsList from './ExhibitionsList';

const Exhibitions = () => (
  <>
    <Header />
    <Page>
    <ExhibitionsList />
    </Page>
    <Footer />
  </>
);

export default Exhibitions;
