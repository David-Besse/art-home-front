import { SAVE_EXHIBITIONS, SAVE_USER_ARTWORKS, FETCH_USER_ARTWORKS } from '../actions/exhibitions';

export const initialState = {
  // list of all exhibition occuring at the moment
  list: [],
  // indicate if all exhibitions are loaded
  isExhibitionsLoaded: false,
  artworks: [],
  isArtworksLoading: false,
  artwork: { title: '', description: '', picture: '' },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EXHIBITIONS:
      return {
        ...state,
        list: action.exhibitions,
        isExhibitionsLoaded: true,
      };
    case SAVE_USER_ARTWORKS:
      return {
        ...state,
        artworks: action.artworks,
        isArtworksLoading: false,
      };
    case FETCH_USER_ARTWORKS:
      return {
        ...state,
        isArtworksLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
