/* Action Types */
const AUTO_SIGN_IN = "login/AUTO_SIGN_IN";
const SIGN_IN = "login/SING_IN";
const SIGN_OUT = "login/SIGN_OUT";

/* Action Creators */
export const autoSignIn = () => {};
export const signIn = () => {};
export const signOut = () => {};

/* Initial state */
const initialState = {};

/* Reducer */
export default function login(state = initialState, action) {
  /*
    action.type에 따른 동작을 정의
  */
}