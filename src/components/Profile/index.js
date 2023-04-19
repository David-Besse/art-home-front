import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import UserInformations from './userInformations';

import './styles.scss';

const Profile = () => (
  <Page>
    <Header />
    <UserInformations />
    <Footer />
  </Page>
);

export default Profile;
