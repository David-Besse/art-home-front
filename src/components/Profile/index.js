import { useSelector } from 'react-redux';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';

import { Tab, Tabs } from 'react-bootstrap';

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
            && (
            <Tabs
              defaultActiveKey="favoris"
              id="tabMain"
              className="tabMenu"
            >
              <Tab eventKey="favorites" title="Mes Favories">
                <MyFavorites />
              </Tab>
              <Tab eventKey="exhibitionsManager" title="Gestionnaire d'expositions">
                <ExhibitionsManager />
              </Tab>
            </Tabs>
            )}
        </div>
      </Page>
      <Footer />
    </>
  );
};

export default Profile;
