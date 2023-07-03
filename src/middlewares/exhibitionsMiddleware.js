import axios from 'axios';

import { toggleAlertMessage, messageToShow } from 'src/actions/errorMessages';
import {
  FETCH_EXHIBITIONS, saveExhibitions,
  FETCH_USER_ARTWORKS, saveUserArtworks,
  UPDATE_USER_ARTWORK, SUBMIT_NEW_ARTWORK,
  SUBMIT_NEW_EXHIBITION, saveUserExhibitions,
  DELETE_USER_ARTWORK, fetchUserArtworks,
} from '../actions/exhibitions';

import { saveToLocalStorage } from '../utils/localStorage';

const exhibitionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EXHIBITIONS:
      axios.get('/exhibitions')
        .then((response) => {
          store.dispatch(saveExhibitions(response.data));
        })
        .catch(() => {
        });
      break;
    case FETCH_USER_ARTWORKS:
      axios.get(
        `/secure/artworks/exhibitions/${action.payload}/profile`,
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
          if (error.response.data.message === 'Expired JWT Token') {
            store.dispatch(toggleAlertMessage());
            store.dispatch(messageToShow('warning', 'Votre session a expirée.'));
          }
          else {
            store.dispatch(toggleAlertMessage());
            store.dispatch(messageToShow('warning', 'Un problème est survenu, si cela se reproduit, veuillez nous contacter.'));
          }
        });
      break;
    case UPDATE_USER_ARTWORK:
      axios.patch(
        `/secure/artworks/${action.artworkId}/edit`,
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
          const currentExhib = store.getState().profile.selectedExhibitionId;
          store.dispatch(fetchUserArtworks(currentExhib));

          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('success', 'Ok je vais aller faire sécher !'));
        })
        .catch(() => {
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('warning', 'Un problème est survenu, si cela se reproduit, veuillez nous contacter.'));
        });
      break;
    case SUBMIT_NEW_ARTWORK:
      axios.post(
        '/secure/artworks/new',
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
        .then(() => {
          const currentExhib = parseInt(action.payload.exhibition, 10);
          const artworkExhib = store.getState().profile.selectedExhibitionId;

          if (currentExhib === artworkExhib) {
            store.dispatch(fetchUserArtworks(currentExhib));
          }

          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('success', 'Merci, quelle merveille !'));
        })
        .catch(() => {
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('warning', 'Un problème est survenu, si cela se reproduit, veuillez nous contacter.'));
        });
      break;
    case SUBMIT_NEW_EXHIBITION:
      axios
        .post(
          '/secure/exhibitions/new',
          {
            title: action.payload.newExhibitionName,
            description: action.payload.newExhibitionDescription,
            artist: '',
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().users.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          store.dispatch(saveUserExhibitions(response.data));
          const { userExhibitions } = store.getState().exhibitions;
          const userData = { userExhibitions };
          saveToLocalStorage('user-arthome', userData);
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('success', 'Mais quelle productivité !'));
        })
        .catch(() => {
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('warning', "Une erreur est survenue lors de la création de l'exposition, si ce problème persiste, veuillez nous contacter. Merci"));
        });
      break;
    case DELETE_USER_ARTWORK:
      axios.delete(
        `/secure/artworks/${action.id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().users.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(fetchUserArtworks(store.getState().profile.selectedExhibitionId));
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('success', "Même si son heure est venu, nous n'oublierons pas ce chef d'oeuvre."));
        })
        .catch(() => {
          store.dispatch(toggleAlertMessage());
          store.dispatch(messageToShow('warning', 'Un problème est survenu, si cela se reproduit, veuillez nous contacter.'));
        });
      break;
    default:
  }
  next(action);
};

export default exhibitionsMiddleware;
