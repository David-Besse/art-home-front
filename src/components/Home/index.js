import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import Loading from './Loading';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);

  return (
    <>
      <Header />
      <Page>
        { !isExhibitionsLoaded
        && <Loading /> }
        { isExhibitionsLoaded
        && <HomeCarousel />}
      </Page>
      <Footer />
    </>
  );
};

export default Home;
