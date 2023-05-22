import {
  SAVE_EXHIBITIONS, SAVE_USER_ARTWORKS, FETCH_USER_ARTWORKS, WIPE_DATA, UPDATE_USER_ARTWORK,
} from '../actions/exhibitions';

export const initialState = {
  // list of all exhibitions available at the moment
  list: [],
  isExhibitionsLoaded: false,
  userArtworks: [],
  isArtworksLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EXHIBITIONS:
      return {
        ...state,
        list: action.exhibitions,
        isExhibitionsLoaded: true,
      };
    case FETCH_USER_ARTWORKS:
      return {
        ...state,
        isArtworksLoading: true,
      };
    case SAVE_USER_ARTWORKS:
      return {
        ...state,
        userArtworks: action.artworks,
        isArtworksLoading: false,
      };
    case WIPE_DATA:
      return {
        ...state,
        artworks: [],
        isArtworksLoading: false,
        artwork: { title: '', description: '', picture: '' },
      };
    case UPDATE_USER_ARTWORK:
      return {
        ...state,
        userArtworks: state.userArtworks
          .map((artwork) => {
            if (artwork.id === action.artworkId) {
              return action.data;
            }
            return artwork;
          })
          .filter((artwork) => artwork.exhibition.id !== action.data.exhibition.id),
      };
    default:
      return state;
  }
};

export default reducer;
