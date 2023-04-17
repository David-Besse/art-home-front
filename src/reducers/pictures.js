import { SAVE_PICTURES } from '../actions/pictures';

export const initialState = {
  list: [],
  isPicturesLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PICTURES:
      return {
        ...state,
        list: action.pictures,
        isPicturesLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
