// Display one exhibition
import { Navigate, useParams } from 'react-router-dom';
import { findExhibition } from 'src/selectors/pictures';
import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Pictures from './Pictures';

// import './styles.scss';

const OneExhibition = () => {
  // Compare the slug
  const { slug } = useParams();
  const exhibition = useSelector((state) => findExhibition(state.exhibition.list, slug));

  if (!exhibition) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <Header />
      <Pictures
        name={exhibition.title}
        description={exhibition.description}
        pictures={exhibition.artwork} // Do a map to fill the gallery part in Pictures
        artist={exhibition.artist} // Do a map to fill the artist part in Pictures
      />
      <Footer />
    </Page>
  );
};

export default OneExhibition;
