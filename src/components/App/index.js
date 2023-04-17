import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import Exhibition from 'src/components/Exhibition';
// import Profil from 'src/components/Profil';
// import Backoffice from 'src/components/Backoffice';
// import Disclaimer from 'src/components/Disclaimer';
import Error from 'src/components/Error';
// import Loading from './Loading';

import './styles.scss';
import { fetchExhibitions } from '../../actions/exhibitions';

function App() {
  const isExhibitionsLoaded = useSelector((state) => state.exhibitions.isExhibitionsLoaded);
  const dispatch = useDispatch();

  // un effet qui s'applique une seule fois, après le premier rendu
  useEffect(() => {
    dispatch(fetchExhibitions());
  }, []);

  if (!isExhibitionsLoaded) {
    // TODO - Loader to indicate that the parge is charging
    // <Loading />;
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/exposition" element={<Exhibition />} /> */}
        {/* <Route path="/profil" element={<Profil />} /> */}
        {/* <Route path="/backoffice" element={<Backoffice />} /> */}
        {/* <Route path="/mentions-legales" element={<Disclaimer />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
