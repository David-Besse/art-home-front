import { CHANGE_LOGIN_FIELD, SAVE_AUTH_DATA } from '../actions/users';

export const initialState = {
  logged: false,
  // valeur du champ email du formulaire de login
  email: '',
  // valeur du champ password du formulaire de login
  password: '',
  // pseudo de l'utilisateur (quand il est authentifié)
  nickname: '',
  // token (quand l'utilisateur est authentifié)
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      /* if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      }; */
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
      /*
        => on peut ajouter des nouveaux champs dans le formulaire sans avoir besoin de rajouter
        un if dans le case.
        /!\ il faut qu'une info du payload de l'action contienne exactement le nom de la propriété
        dans le state
      */

    case SAVE_AUTH_DATA:
      return {
        ...state,
        logged: true,
        nickname: action.nickname,
        token: action.token,
        // sécurité : on efface les identifiants du state
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
