import styled from 'styled-components';
import kakao_img from '../../../image/kakao_login_large_narrow.png';

export default function KakaoLoginButton({ className }) {
  return (
    <KakaoButton
      href="http://ec2-13-209-73-79.ap-northeast-2.compute.amazonaws.com:8080/auth/KAKAO"
      className={className}
    />
  );
}

const KakaoButton = styled.a`
  background-image: url(${kakao_img});
  background-size: contain;

  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;
