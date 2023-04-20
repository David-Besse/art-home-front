import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from 'src/components/Home';
import Exhibitions from 'src/components/Exhibitions';
// import OneExhibition from 'src/components/OneExhibition';
import Profile from 'src/components/Profile';
// import Backoffice from 'src/components/Backoffice';
import Disclaimer from 'src/components/Disclaimer';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';

import './styles.scss';
import { fetchExhibitions } from '../../actions/exhibitions';

function App() {
  const isExhibitionsLoaded = useSelector((state) => state.exhibitions.isExhibitionsLoaded);
  const { logged } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExhibitions());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expositions" element={<Exhibitions />} />
        {/* <Route path="/expositions/{:slug}" element={<OneExhibition />} */}
        {logged && <Route path="/profil" element={<Profile />} />}
        <Route path="/mentions-legales" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
