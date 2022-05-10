/* Action Types */
const SIGN_IN = 'login/SING_IN';
const SIGN_OUT = 'login/SIGN_OUT';
const UPDATE_TOKEN = 'login/UPDATE_TOKEN';

/* Action Creators */
export const signIn = (accessToken, UID) => ({
  type: SIGN_IN,
  isLoggedIn: true,
  accessToken,
  UID,
});

export const signOut = () => ({
  type: SIGN_OUT,
  isLoggedIn: false,
  accessToken: null,
});

export const updateToken = (accessToken) => ({
  type: UPDATE_TOKEN,
  accessToken: accessToken,
});

/* Initial state */
const initialState = {
  isLoggedIn: false,
  accessToken: null,
  uid: null,
  loginType: null,
};

/* Reducer */
export default function login(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        accessToken: action.accessToken,
        uid: action.UID,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
}
