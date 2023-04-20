import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import UserInformations from './UserInformations';
import ExhibitionsManager from './ExhibitionsManager';

import './styles.scss';

const Profile = () => (
  <Page>
    <Header />
    <UserInformations />
    <ExhibitionsManager />
    <Footer />
  </Page>
);

export default Profile;
