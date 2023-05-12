import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';

import UserInformations from './UserInformations';
import ExhibitionsManager from './ExhibitionsManager';

import './styles.scss';

/**
 * Profile page
 * @returns {JSX.Element}
 */

const Profile = () => (
  <>
    <Header />
    <Page>
      <div className="profile-page">
        <UserInformations />
        <ExhibitionsManager />
      </div>
    </Page>
    <Footer />
  </>
);

export default Profile;
