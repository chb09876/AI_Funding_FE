import styled from "styled-components";
import google_img from "../../../image/btn_google_signin_dark_normal_web.png";

export default function GoogleLoginButton({ className, login }) {
  return (
    <GoogleButton
      className={className}
      onClick={
        login ||
        (() => {
          alert("로그인 함수를 넣어주세요.");
        })
      }
    ></GoogleButton>
  );
}

const GoogleButton = styled.button`
  background-image: url(${google_img});
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
