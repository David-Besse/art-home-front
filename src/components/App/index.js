import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from 'src/components/Home';
import Exhibitions from 'src/components/Exhibitions';
import OneExhibition from 'src/components/OneExhibition';
import Profile from 'src/components/Profile';
import Disclaimer from 'src/components/Disclaimer';
import CguPage from 'src/components/Cgu';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';

import { fetchExhibitions, saveUserExhibitions } from 'src/actions/exhibitions';
import { saveUserDataFromLocalStorage } from 'src/actions/users';

import { getFromLocalStorage } from 'src/utils/localStorage';

import './styles.scss';

function App() {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.users);

  // checks if a user is in localstorage then retrieves their information
  useEffect(() => {
    // fetch all exhibitions
    dispatch(fetchExhibitions());

    // checks if a user is in localstorage then retrieves their information
    const userFromLocalStorage = getFromLocalStorage('user-arthome');
    if (userFromLocalStorage && userFromLocalStorage.logged && userFromLocalStorage.token !== '') {
      // retrieves user informations
      dispatch(saveUserDataFromLocalStorage(userFromLocalStorage));
      // retrieves user exhibitions
      dispatch(saveUserExhibitions(userFromLocalStorage.userExhibitions));
    }
  }, []);

  /* Routes to navigate in the application */
  return (
    <div className="app d-flex flex-column">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expositions" element={<Exhibitions />} />
        <Route path="/expositions/:slug" element={<OneExhibition />} />
        {logged && <Route path="/profil" element={<Profile />} />}
        <Route path="/mentions-legales" element={<Disclaimer />} />
        <Route path="/CGU" element={<CguPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
