import { SAVE_EXHIBITIONS } from '../actions/exhibitions';

export const initialState = {
  // list of all exhibition occuring at the moment
  list: [],
  // indicate if all exhibitions are loaded
  isExhibitionsLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EXHIBITIONS:
      return {
        ...state,
        list: action.exhibitions,
        isExhibitionsLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
