import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CommunityIcon from '../image/CommunityOff.svg';
import HomeIcon from '../image/HomeOff.svg';
import InvestIcon from '../image/InvestOff.svg';
import ProfitIcon from '../image/ProfitOff.svg';
import SetupIcon from '../image/SetupOff.svg';
import CommunityIconOn from '../image/CommunityOn.svg';
import HomeIconOn from '../image/HomeOn.svg';
import InvestIconOn from '../image/InvestOn.svg';
import ProfitIconOn from '../image/ProfitOn.svg';
import SetupIconOn from '../image/SetupOn.svg';

const MenuNav = () => {
  const location = useLocation();

  return (
    <StyledMenubar>
      <StyledMenuButton to="/">
        <img src={location.pathname === '/' ? HomeIconOn : HomeIcon} alt="홈" />
        <MenuName>홈</MenuName>
      </StyledMenuButton>
      <StyledMenuButton to="/ai">
        <img src={location.pathname.startsWith('/ai') ? InvestIconOn : InvestIcon} alt="투자" />
        <MenuName>투 자</MenuName>
      </StyledMenuButton>
      <StyledMenuButton to="/accounts">
        <img
          src={location.pathname.startsWith('/accounts') ? ProfitIconOn : ProfitIcon}
          alt="수익"
        />
        <MenuName>수 익</MenuName>
      </StyledMenuButton>
      <StyledMenuButton to="/community">
        <img
          src={location.pathname.startsWith('/community') ? CommunityIconOn : CommunityIcon}
          alt="커뮤니티"
        />
        <MenuName>커뮤니티</MenuName>
      </StyledMenuButton>
      <StyledMenuButton to="/options">
        <img src={location.pathname.startsWith('/options') ? SetupIconOn : SetupIcon} alt="설정" />
        <MenuName>설 정</MenuName>
      </StyledMenuButton>
    </StyledMenubar>
  );
};

export default MenuNav;

const StyledMenubar = styled.nav`
  border-top: 2px solid rgb(184, 168, 142);
  background-color: black;
  flex: 0 0 70px;

  display: flex;
  flex-direction: row;
`;

const StyledMenuButton = styled(NavLink)`
  flex: 1 1 0;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & {
    img {
      width: 35px;
      margin-bottom: 3px;
    }
  }
`;

const MenuName = styled.span`
  color: white;
  font-size: 12px;

  margin-bottom: 5px;
`;
