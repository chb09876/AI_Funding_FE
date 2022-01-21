import { Route, Routes } from "react-router-dom";
import BackgroundLayout from "./common/BackgroundLayout";
import MenuNav from "./common/MenuNav";
import Home from "./sample/pages/home/presentational/Home";
import Login from "./pages/login/presentational/Login";
// import BackgroundLayout from "./common/BackgroundLayout";

export default function App() {
  return (
    <BackgroundLayout className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/second" element={"AI page"} />
        <Route path="/third" element={"Account page"} />
        <Route path="/fourth" element={"Community page"} />
        <Route path="/fifth" element={"Settings page"} />
      </Routes>
      <MenuNav></MenuNav>
    </BackgroundLayout>
  );
}
