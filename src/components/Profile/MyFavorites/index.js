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

  const exhibitions = useSelector((state) => state.exhibitions);
  const users = useSelector((state) => state.users);
  
  const list = Array.isArray(exhibitions.list) ? exhibitions.list : [];
  const favorites = Array.isArray(users.favorites) ? users.favorites : [];

  const [favoritesUser, setFavoritesUser] = useState([]);
  const [sortOrder, setSortOrder] = useState('exhibitions');

  // Perform side effects when the dependencies list changes
  useEffect(() => {
    if (list.length > 0) {
      let artworksList = [];
      let updatedFavoritesUser = [];

      // Check the sort order
      if (sortOrder === 'exhibitions') {
        list.forEach((item) => {
          if (item && item.artwork) {
            // Push an object to the artworks list with the title and filtered artwork based on favorites
            artworksList.push({
              title: item.title,
              artwork: item.artwork.filter((exhib) => exhib && favorites.includes(exhib.id)),
            });
          }
        });
        // Filter the artworks list to get only items with artwork present
        updatedFavoritesUser = [...artworksList.filter((item) => item.artwork && item.artwork.length > 0)];
      }

      // Check the sort order
      if (sortOrder === 'alphabetical') {
        // Flatten the list to get an array of all artworks
        artworksList = list.flatMap((exhibition) => 
          exhibition && exhibition.artwork ? exhibition.artwork : []
        );

        // Filter the artworks based on favorites
        updatedFavoritesUser = artworksList.filter((artwork) => artwork && favorites.includes(artwork.id));

        // Sort the updated favorites user based on the title in alphabetical order
        updatedFavoritesUser = updatedFavoritesUser.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      }

      // Update the favorites user state
      setFavoritesUser(updatedFavoritesUser);
    }
  }, [list, favorites, sortOrder]);

  const handleFavorites = (pictureId) => {
    dispatch(removeFavorites(pictureId));
    dispatch(submitProfileUpdate());

    // Update the favorites user list by removing the artwork with the given pictureId
    setFavoritesUser((prevFavoritesUser) => 
      Array.isArray(prevFavoritesUser) 
        ? prevFavoritesUser.filter((artwork) => artwork.id !== pictureId)
        : []
    );
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
        {Array.isArray(favoritesUser) && favoritesUser.length > 0
        && sortOrder === 'alphabetical'
        && (
        <Fade in>
          <div className="fade-images">
            {favoritesUser.map((artwork) => (
              artwork && (
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
                    {artwork.title || 'Sans titre'}
                  </Figure.Caption>
                </Figure>
              )
            ))}
          </div>
        </Fade>
        )}
        {Array.isArray(favoritesUser) && favoritesUser.length > 0
        && sortOrder === 'exhibitions'
        && (
          <Fade in>
            <div>
              {favoritesUser.map((item) => (
                item && (
                  <div key={item.title || 'sans-titre'}>
                    <h4>{item.title || 'Sans titre'}</h4>
                    <div className="fade-images">
                      {item.artwork && Array.isArray(item.artwork) && item.artwork.map((artworkItem) => (
                        artworkItem && (
                          <Figure key={artworkItem.id} className="image-card">
                            <Figure.Image src={artworkItem.picture} alt={artworkItem.title} className="image-fav" rounded fluid />
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
                              {artworkItem.title || 'Sans titre'}
                            </Figure.Caption>
                          </Figure>
                        )
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </Fade>
        )}
        {(!Array.isArray(favoritesUser) || favoritesUser.length === 0) && (
          <p className="text-center my-5">Aucun favori pour le moment.</p>
        )}
      </div>
    </section>
  );
};

export default MyFavorites;
