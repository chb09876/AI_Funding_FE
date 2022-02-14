import styled from "styled-components";
import google_img from "../../../image/google_login.png";
import GoogleLoginBtn from "../container/google";

export default function GoogleLoginButton({ className, login }) {
  return (
    //<GoogleLoginBtn></GoogleLoginBtn>
    <GoogleButton
      className={className}
    >
      <GoogleLoginBtn></GoogleLoginBtn>
    </GoogleButton>
    /*<GoogleButton
      className={className}
      onClick={
        login ||
        (() => {
          alert("로그인 함수를 넣어주세요.");
        })
      }
    >
    <GoogleLoginBtn></GoogleLoginBtn>
    </GoogleButton>
    */
  );
}

styled(GoogleLoginButton)`
  background-image: url(${google_img});
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;

const GoogleButton = styled.div`
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;