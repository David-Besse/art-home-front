import Page from 'src/components/Page';
import HomeCarousel from '../HomeCarousel';
import imageData from '../HomeCarousel/ImageCarousel/imageData';

import './styles.scss';

/* const imageCarousel = imageData.map((artwork) => {
  const imageToDisplay = artwork.image;
  const expoName = artwork.expo;
  const texte = artwork.description;
  return (imageToDisplay, expoName, texte);
}); */

// TODO Review the police size depending on the screen size

const Home = () => (
  <Page>
    <h1>EXPOSITION</h1>
    <HomeCarousel />
    <h2>DESCRIPTION</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui orci, pretium a metus quis, consequat pulvinar tortor. Fusce rutrum orci eu accumsan rutrum. Aliquam quis mi ante. Pellentesque sit amet ipsum consectetur eros dapibus feugiat in nec nisl. Sed eu erat semper, faucibus leo eget, efficitur diam. Aliquam elit magna, convallis at lectus at, fermentum pulvinar justo. Fusce vel libero pharetra, euismod mi at, accumsan enim. Etiam fringilla posuere turpis tempor tristique.</p>
  </Page>
);

export default Home;
