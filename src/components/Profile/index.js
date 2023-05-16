import { useSelector } from 'react-redux';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';

import UserInformations from './UserInformations';
import ExhibitionsManager from './ExhibitionsManager';
import MyFavorites from './MyFavorites';

import './styles.scss';

/**
 * Profile page
 * @returns {JSX.Element}
 */

const Profile = () => {
  const { role } = useSelector((state) => state.users);

  return (
    <>
      <Header />
      <Page>
        <div className="profile-page">
          <UserInformations />
          {role[0] === 'ROLE_ARTIST'
            && <ExhibitionsManager />}
          <MyFavorites />
        </div>
      </Page>
      <Footer />
    </>
  );
};

export default Profile;
