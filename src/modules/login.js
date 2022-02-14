/* Action Types */
const AUTO_SIGN_IN = 'login/AUTO_SIGN_IN';
const SIGN_IN = 'login/SING_IN';
const SIGN_OUT = 'login/SIGN_OUT';

/* Action Creators */
export const autoSignIn = () => ({
  type: AUTO_SIGN_IN,
  isLoggedIn: true,
  hasRefresh: true,
});

export const signIn = () => ({
  type: SIGN_IN,
  isLoggedIn: true,
  hasRefresh: true,
  accessToken: null,
});

export const signIns = () => ({
  type: SIGN_IN,
  isLoggedIn: true,
  hasRefresh: true,
  accessToken: null,
});

export const signOut = () => ({
  type: SIGN_OUT,
  isLoggedIn: false,
  hasRefresh: true,
  accessToken: null,
});

/* Initial state */
const initialState = {
  isLoggedIn: false,
  hasRefresh: false,
  accessToken: null,
};

/* Reducer */
export default function login(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasRefresh: action.hasRefresh,
      };
    case AUTO_SIGN_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasRefresh: action.hasRefresh,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasRefresh: action.hasRefresh,
      };
    default:
      return state;
  }
}
