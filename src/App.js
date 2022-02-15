import { Route, Routes } from "react-router-dom";
import BackgroundLayout from "./sample/common/BackgroundLayout";
import MenuNav from "./sample/common/MenuNav";
import Home from "./sample/pages/home/presentational/Home";
import AccountPage from "./pages/Accountpage/presentational/AccountPage";

export default function App() {
  return (
    <BackgroundLayout className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/second" element={"AI pages"} />
        <Route path="/third" element={<AccountPage></AccountPage>}/>
        <Route path="/fourth" element={"Community page"} />
        <Route path="/fifth" element={"Settings page"} />
      </Routes>
      <MenuNav></MenuNav>
    </BackgroundLayout>
  );
}
