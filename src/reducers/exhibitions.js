import {
  SAVE_EXHIBITIONS, SAVE_USER_ARTWORKS, FETCH_USER_ARTWORKS, WIPE_DATA, UPDATE_USER_ARTWORK, SAVE_USER_EXHIBITIONS,
} from '../actions/exhibitions';

export const initialState = {
  list: [], // list of all exhibitions
  isExhibitionsLoaded: false,
  userArtworks: [],
  isArtworksLoading: false,
  userExhibitions: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EXHIBITIONS:
      return {
        ...state,
        list: action.payload,
        isExhibitionsLoaded: action.payload.length > 0 ? true : false,
      };
    case FETCH_USER_ARTWORKS:
      return {
        ...state,
        isArtworksLoading: true,
      };
    case SAVE_USER_ARTWORKS:
      return {
        ...state,
        userArtworks: action.payload,
        isArtworksLoading: false,
      };
    case SAVE_USER_EXHIBITIONS:
      return {
        ...state,
        userExhibitions: action.payload,
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
    case WIPE_DATA:
      return {
        ...state,
        userArtworks: [],
        exhibitions: [],
      };
    default:
      return state;
  }
};

export default reducer;
