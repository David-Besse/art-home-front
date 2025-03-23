import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import Loading from './Loading';
import HomeCarousel from './HomeCarousel';

// homepage with the carousel
const Home = () => {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);

  return (
    <>
      <Header />
      <Page>
        { !isExhibitionsLoaded ? <Loading /> : <HomeCarousel /> }
      </Page>
      <Footer />
    </>
  );
};

export default Home;
