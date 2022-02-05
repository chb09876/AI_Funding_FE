import axios from "axios";

const JAVASCRIPT_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;
const RESTAPI_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_KEY;
const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;
const Kakao = window.Kakao;

export const initializeKakao = () => {
  // Kakao.Auth, Kakao.API등을 사용하기 위해 실행해야 하는 함수
  // 페이지가 리다이렉트 된 경우 다시 실행해야 한다.
  if (!Kakao.isInitialized()) Kakao.init(JAVASCRIPT_KEY);
};

export const cleanUpKakao = () => {
  Kakao.cleanup();
};

export const authorizeKakao = async (
  redirectUri = "http://localhost:3000/oauth"
) => {
  const response = await Kakao.Auth.authorize({
    redirectUri,
  });
  console.log(response);
};

export const logoutFromKakao = () => {
  // 토큰을 만료 시키는 함수
  if (!Kakao.Auth.getAccessToken()) console.log("Not logged in.");
  else Kakao.Auth.logout(() => console.log("logout!"));
};

export const setAccessTokenKakao = () => {
  getTokensFromKakao().then((token) => {
    console.log(token);
    Kakao.Auth.setAccessToken(token.data.access_token);
  });
};

export const unlinkFromKakao = () => {
  Kakao.API.request({
    url: "/v1/user/unlink",
    success: (r) => {
      console.log(r);
    },
    fail: (err) => {
      console.log(err);
    },
  });
};

export const getUserInfoFromKakao = () => {
  Kakao.API.request({
    url: "/v2/user/me",
    success: (response) => {
      console.log(response);
    },
    fail: (err) => {
      console.log(err);
    },
  });
};

export const loginKakaoWithPopup = () => {
  Kakao.Auth.login({
    success: (response) => {
      console.log(response);
    },
    fail: (err) => console.log(err),
  });
};

// REST API: get access token and refresh token
export const getTokensFromKakao = async () => {
  const data = new URLSearchParams(window.location.search);
  data.append("grant_type", "authorization_code");
  data.append("client_id", RESTAPI_KEY);
  data.append("redirect_uri", REDIRECT_URI);
  data.append("client_secret", CLIENT_SECRET);

  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      data,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    return response;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// export const logoutFromKakao = (accessToken) => {
//   const response = axios.post("https://kapi.kakao.com/v1/user/logout", null, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   console.log(response);
//   return response;
// };
