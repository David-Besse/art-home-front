import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import Loading from './Loading';
import HomeCarousel from './HomeCarousel';

// TODO Review the police size depending on the screen size

const Home = () => {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);

  return (
    <Page>
      <Header />
      { !isExhibitionsLoaded
        && <Loading /> }
      { isExhibitionsLoaded
        && <HomeCarousel />}
      <Footer />
    </Page>
  );
};

export default Home;
