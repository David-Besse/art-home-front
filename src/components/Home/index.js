import Page from 'src/components/Page';
import HomeCarousel from '../HomeCarousel';

import './styles.scss';

const Home = () => (
  <Page>
    <h1>EXPOSITION</h1>
    <HomeCarousel />
    <p>Description de l'exposition</p>
  </Page>
);

export default Home;
