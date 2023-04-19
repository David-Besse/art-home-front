import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from 'src/components/Home';
import Exhibitions from 'src/components/Exhibitions';
import OneExhibition from 'src/components/OneExhibition';
// import Profil from 'src/components/Profil';
// import Backoffice from 'src/components/Backoffice';
import Disclaimer from 'src/components/Disclaimer';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';
// import Loading from './Loading';

import './styles.scss';
import { fetchExhibitions } from '../../actions/exhibitions';
import { fetchPictures } from '../../actions/pictures';

function App() {
  const { isExhibitionsLoaded } = useSelector((state) => state.exhibitions);
  const { isPicturesLoaded } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExhibitions());
    dispatch(fetchPictures());
  }, []);

  if (!isExhibitionsLoaded) {
    // TODO - Loader to indicate that the page is charging
    // <Loading />;
  }

  if (!isPicturesLoaded) {
    // TODO - Loader to indicate that the page is charging
    // <Loading />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expositions" element={<Exhibitions />} />
        <Route path="/expositions/:slug" element={<OneExhibition />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
        {/* <Route path="/backoffice" element={<Backoffice />} /> */}
        <Route path="/mentions-legales" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
