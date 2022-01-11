import styled from "styled-components";
import I from "./I";
import J from "./J";

export default function Home() {
  return (
    <StyledHome>
      <I></I>
      <J></J>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  height: 100%;
  border: 3px yellow solid;
  display: flex;
  flex-direction: column;
`;
