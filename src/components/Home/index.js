import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import HomeCarousel from './HomeCarousel';

import './styles.scss';

// TODO Review the police size depending on the screen size

const Home = () => (
  <Page>
    <Header />
    <HomeCarousel />
    <Footer />
  </Page>
);

export default Home;
