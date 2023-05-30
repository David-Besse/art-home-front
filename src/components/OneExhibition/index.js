import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import ArtworksPage from './ArtworksPage';
import Loading from '../Home/Loading';

// Structure to display one exhibition
const OneExhibition = () => {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);

  return (
    <>
      <Header />
      <Page>
        {/* Displaying Loader while the content is added to the state */}
        { !isExhibitionsLoaded
        && <Loading /> }
        { isExhibitionsLoaded
        && <ArtworksPage /> }
      </Page>
      <Footer />
    </>
  );
};

export default OneExhibition;
