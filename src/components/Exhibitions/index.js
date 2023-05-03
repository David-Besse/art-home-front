import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import ExhibitionsList from './ExhibitionsList';
import Loading from '../Home/Loading';

/**
 * All active exhibitions
 * @returns {JSX.Element}
 */

const Exhibitions = () => {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);

  return (
    <>
      <Header />
      <Page>
        {/* Displaying Loader while the content is added to the state */}
        { !isExhibitionsLoaded
        && <Loading /> }
        { isExhibitionsLoaded
        && <ExhibitionsList />}
      </Page>
      <Footer />
    </>
  );
};

export default Exhibitions;
