import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from 'src/components/Home';
import Exhibitions from 'src/components/Exhibitions';
import OneExhibition from 'src/components/OneExhibition';
import Profile from 'src/components/Profile';
import Disclaimer from 'src/components/Disclaimer';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';

import { fetchExhibitions } from '../../actions/exhibitions';
import { fetchPictures } from '../../actions/pictures';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { saveUserDataFromLocalStorage } from '../../actions/users';

import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.users);

  /* Retriving information to display homepage, exhibitions and one exhibition */
  useEffect(() => {
    dispatch(fetchExhibitions());
    dispatch(fetchPictures());
  }, []);

  /* Retriving profil information from the state and comparing with the local storage to know if the user is already logged */
  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    if (userFromLocalStorage !== null && userFromLocalStorage.logged) {
      dispatch(saveUserDataFromLocalStorage(userFromLocalStorage));
    }
  }, []);

  /* Route to navigate in the application */
  return (
    <div className="app d-flex flex-column justify-content-between">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expositions" element={<Exhibitions />} />
        <Route path="/expositions/:slug" element={<OneExhibition />} />
        {logged && <Route path="/profil" element={<Profile />} />}
        <Route path="/mentions-legales" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
