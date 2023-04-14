import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import HomeCarousel from '../HomeCarousel';

import './styles.scss';

// TODO Review the police size depending on the screen size

const Home = () => {
  const exhibitions = useSelector((state) => state.list);
  return (
    <Page>
      <HomeCarousel exhibitons={exhibitions} />
    </Page>
  );
};

export default Home;
