import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import Loading from 'src/components/App/Loading';
import HomeCarousel from './HomeCarousel';

import './styles.scss';

// TODO Review the police size depending on the screen size

const Home = () => {
  const isExhibitionsLoaded = useSelector((state) => state.exhibitions.isExhibitionsLoaded);
  return (
    <Page>
      <Header />
      { !isExhibitionsLoaded
    && <Loading /> }
      <HomeCarousel />
      <Footer />
    </Page>
  );
};

export default Home;
