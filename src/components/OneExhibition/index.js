import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { findExhibition } from 'src/selectors/pictures';

import Pictures from './Pictures';

// Structure to display one exhibition
const OneExhibition = () => {
  const { slug } = useParams();
  const exhibition = useSelector((state) => findExhibition(state.pictures.list, slug));

  if (!exhibition) {
    return <Navigate to="/error" replace />;
  }
  return (
    <>
      <Header />
      <Page>
        <Pictures />
      </Page>
      <Footer />
    </>
  );
};

export default OneExhibition;
