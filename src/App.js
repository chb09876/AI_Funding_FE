import styled from "styled-components";
import Home from "./pages/home/Home";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Back className="App">
      <GlobalStyle />
      <Home></Home>
      <Nav></Nav>
    </Back>
  );
}
// import ComponentI from './pages/home/I';
// import SomePage from './pages/home/somePage';
// import './App.css';

// function App() {
//   return (
// 		<Routes>
// 			<Route path = '/' element={<ComponentI/>}/>
// 			<Route path = '/somePage' element={<SomePage/>}/>
// 		</Routes>
// 	);
// }

export default App;

const Back = styled.div`
  background-color: #616060;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const Nav = styled.div`
  height: 70px;
  width: 100%;
  border: solid 1px blue;
`;
