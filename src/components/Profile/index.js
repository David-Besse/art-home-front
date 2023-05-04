import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';

import UserInformations from './UserInformations';
import ExhibitionsManager from './ExhibitionsManager';

import './styles.scss';

const Profile = () => (
  <>
    <Header />
    <Page>
      <UserInformations />
      <ExhibitionsManager />
    </Page>
    <Footer />
  </>
);

export default Profile;
