import { SAVE_EXHIBITIONS, SAVE_USER_ARTWORKS } from '../actions/exhibitions';

export const initialState = {
  // list of all exhibition available at the moment
  list: [],
  // indicate if all exhibitions are loaded
  isExhibitionsLoaded: false,
  artworks: [],
  isArtworksLoaded: false,
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
        isArtworksLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
