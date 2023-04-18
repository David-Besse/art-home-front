import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import { useSelector } from 'react-redux';

import './styles.scss';

const Profil = () => {
  const {
    email,
    nickname,
    lastName,
    firstName,
    birthday,
    presentation,
    avatar,
  } = useSelector((state) => state.users);

  // we apply a random avatar if the user does not have one
  let defaultAvatar;
  if (avatar === '') {
    defaultAvatar = Math.floor(Math.random() * ((2 - 1) + 1)) + 1;
  }

  return (
    <Page>
      <Header />
      <div className="mx-3 profil">
        <h2 className="mt-3 mb-3">Mon Profil</h2>
        <div className="card p-2">
          <div className="row g-0">
            <div className="col-lg-2 d-flex aligns-items-center justify-content-center">
              <img src={avatar !== '' ? avatar : `images/avatar/avatar${defaultAvatar}.png`} className="img-fluid rounded-start img-avatar" alt="avatar" />
            </div>
            <div className="col-lg">
              <div className="card-body">
                <p className="card-text">Pseudo : {nickname}</p>
                <p className="card-text">Nom : {lastName}</p>
                <p className="card-text">Prénom : {firstName}</p>
                <p className="card-text">Email : {email}</p>
                <p className="card-text">Date de naissance : {birthday}</p>
                <p className="card-text">Ma présentation : {presentation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default Profil;
