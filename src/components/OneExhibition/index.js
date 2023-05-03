import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findExhibition } from 'src/selectors/pictures';

import Page from 'src/components/Page';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Pictures from './Pictures';

/**
 * One complete exhibition
 * @returns {JSX.Element}
 */

const OneExhibition = () => {
  const { slug } = useParams();
  const exhibition = useSelector((state) => findExhibition(state.pictures.list, slug));

  if (!exhibition) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <Header />
      <Pictures />
      <Footer />
    </Page>
  );
};

export default OneExhibition;
