// import {  } from '../actions/exhibitions';

export const initialState = {
  list: [],
  // recettes préférées de l'utilisateur
  isExhibitionsLoaded: false,
};

// /!\ combinaison de reducers (state à tiroirs) : ne pas oublier le nom du tiroir quand7
// on veut lire une info du state => state.recipes.list

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
