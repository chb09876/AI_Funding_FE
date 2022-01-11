import styled from "styled-components";
import Home from "./pages/home/Home";
import MenuNav from "./pages/home/MenuNav";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Back className="App">
      <GlobalStyle />
      <Home></Home>
      <StyledNav />
    </Back>
  );
}

// import React from "react";
// import test1 from "./pages/test1";
// import test2 from "./pages/test2";
// import test3 from "./pages/test3";
// import test4 from "./pages/test4";
// import test5 from "./pages/test5";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// function Nav() {
//   return (
//     <div className="container">
//       <Routes>
//         <Route path="*" element={test1} />
//         <Route path="/second" element={test2} />
//         <Route path="/third" element={test3} />
//         <Route path="/forth" element={test4} />
//         <Route path="/fifth" element={test5} />
//       </Routes>
//     </div>
//   );
// }
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

const StyledNav = styled(MenuNav)`
  height: 70px;
  width: 100%;
  border: solid 1px blue;
`;
