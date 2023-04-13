import Page from 'src/components/Page';
import HomeCarousel from '../HomeCarousel';
// import imageData from '../HomeCarousel/ImageCarousel/imageData';

import './styles.scss';

const Home = () => (
  <Page>
    <h1>EXPOSITION</h1>
    <HomeCarousel />
    <p>Description de l'exposition</p>
  </Page>
);

export default Home;
