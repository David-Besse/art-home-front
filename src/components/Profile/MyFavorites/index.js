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
  const [sortOrder, setSortOrder] = useState('exhibitions');

  useEffect(() => {
    if (list.length > 0) {
      let artworksList = [];
      let updatedFavoritesUser = [];

      if (sortOrder === 'exhibitions') {
        list.forEach((item) => {
          artworksList.push({
            title: item.title,
            artwork: item.artwork.filter((exhib) => favorites.includes(exhib.id))
          });
        });
        updatedFavoritesUser = [...artworksList.filter((item) => item.artwork && item.artwork.length > 0)];
      }
      if (sortOrder === 'alphabetical') {
        artworksList = list.flatMap((exhibition) => exhibition.artwork);
        updatedFavoritesUser = artworksList.filter((artwork) => favorites.includes(artwork.id));
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
      <div className="myfavoritesContainer mt-3 border-top">
        <h3 className="myfavoritesTitle fw-bolder my-3">Mes Favoris</h3>
        <div>
          <label htmlFor="favorites-select" className="my-3">Trier par :
            <select name="favorites-select" id="favorites-select" className="ms-2" onChange={(e) => setSortOrder(e.target.value)}>
              <option value="exhibitions">Expositions</option>
              <option value="alphabetical">Ordre alphabétique</option>
            </select>
          </label>
        </div>
        {favoritesUser.length > 0
        && sortOrder === 'alphabetical'
        && (
        <Fade in>
          <div className="fade-images">
            {favoritesUser.map((artwork) => (
              <Figure key={`${artwork.id}_${artwork.title}`} className="image-card">
                <Figure.Image src={artwork.picture} className="image-fav" rounded fluid />
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
                <Figure.Caption className="image-title">
                  {artwork.title}
                </Figure.Caption>
              </Figure>
            ))}
          </div>
        </Fade>
        )}
        {favoritesUser.length > 0
        && sortOrder === 'exhibitions'
        && (
          <Fade in>
            <div>
              {favoritesUser.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <div className="fade-images">
                    {item.artwork && item.artwork.map((artworkItem) => (
                      <Figure key={artworkItem.id} className="image-card">
                        <Figure.Image src={artworkItem.picture} className="image-fav" rounded fluid />
                        <div
                          className="heart-icon"
                          onClick={() => handleFavorites(artworkItem.id)}
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
                        <Figure.Caption className="image-title">
                          {artworkItem.title}
                        </Figure.Caption>
                      </Figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        )}
        {favoritesUser.length === 0
        && (
        <div>
          <p>Pas de favoris enregistrés.</p>
        </div>
        )}
      </div>
    </section>
  );
};

export default MyFavorites;
