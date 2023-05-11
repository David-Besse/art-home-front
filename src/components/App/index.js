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

  // fetch all exhibitions for the carousel and fetch all artworks for the oneExhibition page
  useEffect(() => {
    dispatch(fetchExhibitions());
    dispatch(fetchPictures());
  }, []);

  // checks if a user is in localstorage then retrieves their information
  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    if (userFromLocalStorage !== null && userFromLocalStorage.logged) {
      dispatch(saveUserDataFromLocalStorage(userFromLocalStorage));
    }
  }, []);

  return (
    <div className="app d-flex flex-column">
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
