import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  removeFavorites,
  submitProfileUpdate,
} from 'src/actions/users';

import Fade from 'react-bootstrap/Fade';
import Figure from 'react-bootstrap/Figure';

import './styles.scss';

const MyFavorites = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.exhibitions);
  const { favorites } = useSelector((state) => state.users);

  const [favoritesUser, setFavoritesUser] = useState([]);
  const [sortOrder, setSortOrder] = useState('expositions');

  useEffect(() => {
    if (list.length > 0) {
      const artworksList = list.flatMap((exhibition) => exhibition.artwork);
      const allFavoritesUser = artworksList.filter((artwork) => favorites.includes(artwork.id));

      let updatedFavoritesUser = [...allFavoritesUser];

      if (sortOrder === 'alphabetical') {
        updatedFavoritesUser = updatedFavoritesUser.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      }

      setFavoritesUser(updatedFavoritesUser);
    }
  }, [list, favorites, sortOrder]);

  const handleFavorites = (pictureId) => {
    dispatch(removeFavorites(pictureId));
    dispatch(submitProfileUpdate());

    setFavoritesUser((prevFavoritesUser) => prevFavoritesUser.filter((artwork) => artwork.id !== pictureId));
  };

  return (
    <section className="myfavoritesSection">
      <div className="myfavoritesContainer mt-3">
        <h3 className="myfavoritesTitle fw-bolder mt-3">Mes Favoris</h3>
        <div className="mb-3">
          <label htmlFor="favorites-select">Trier par :
            <select name="favorites-select" id="favorites-select" className="ms-2" onChange={(e) => setSortOrder(e.target.value)}>
              <option value="expositions">Expositions</option>
              <option value="alphabetical">Ordre alphabétique</option>
            </select>
          </label>
        </div>
        {favoritesUser.length > 0
        && (
        <Fade in>
          <div id="fade-images">
            {favoritesUser.map((artwork) => (
              <Figure key={artwork.id} className="image-card">
                <Figure.Image src={artwork.picture} className="image-fav" rounded fluid />
                <Figure.Caption className="image-title">
                  {artwork.title}
                </Figure.Caption>
                <div
                  className="heart-icon"
                  onClick={() => handleFavorites(artwork.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </div>
              </Figure>
            ))}
          </div>
        </Fade>
        )}
      </div>
    </section>
  );
};

export default MyFavorites;
