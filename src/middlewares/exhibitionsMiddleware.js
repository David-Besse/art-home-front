import axios from 'axios';
import {
  FETCH_EXHIBITIONS, saveExhibitions,
  FETCH_USER_ARTWORKS, saveUserArtworks,
  UPDATE_USER_ARTWORK, SUBMIT_NEW_ARTWORK,
  DELETE_USER_ARTWORK,
} from '../actions/exhibitions';

const exhibitionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXHIBITIONS:
      axios.get('http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/exhibitions/homepage')
        .then((response) => {
          setTimeout(() => {
            store.dispatch(saveExhibitions(response.data));
          }, 1500);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case FETCH_USER_ARTWORKS:
      axios.get(
        `http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/artworks/exhibitions/${action.payload}/profile`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().users.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUserArtworks(response.data));
        })
        .catch((error) => {
          // console.warn(error);
          if (error.response.data.message === 'Expired JWT Token') {
            // eslint-disable-next-line no-alert
            alert("Impossible d'exécuter la demande, la session a expirée. Veuillez vous reconnecter.");
          }
        });
      break;
    case UPDATE_USER_ARTWORK:
      axios.patch(
        `http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/artworks/${action.artworkId}/edit`,
        {
          title: action.data.title,
          description: action.data.description,
          picture: action.data.picture,
          exhibition: action.data.exhibition,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().users.token}`,
          },
        },
      )
        .then(() => {
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case SUBMIT_NEW_ARTWORK:
      axios.post(
        'http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/artworks/new',
        {
          title: action.payload.title,
          description: action.payload.description,
          picture: action.payload.picture,
          exhibition: action.payload.exhibition,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().users.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUserArtworks(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case DELETE_USER_ARTWORK:
      axios.delete(
        `http://aurelia-perrier-server.eddi.cloud/projet-12-art-at-home-back/public/api/secure/artworks/${action.id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().users.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUserArtworks(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default exhibitionsMiddleware;
