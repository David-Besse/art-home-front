import { Routes, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import Exhibition from 'src/components/Exhibition';
import OneExhibition from '../OneExhibition';
// import Profil from 'src/components/Profil';
// import Backoffice from 'src/components/Backoffice';
// import Disclaimer from 'src/components/Disclaimer';
import Error from 'src/components/Error';
// import Loading from './Loading';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/exposition/`${slug}`" element={<Exhibition />} /> */}
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
