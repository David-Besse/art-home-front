import { SAVE_EXHIBITIONS } from '../actions/exhibitions';

export const initialState = {
  // list of all exhibition occuring at the moment
  list: [],
  // indicate if all exhibitions are loaded
  isExhibitionsLoaded: false,
};

// /!\ combinaison de reducers (state à tiroirs) : ne pas oublier le nom du tiroir quand7
// on veut lire une info du state => state.recipes.list

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
