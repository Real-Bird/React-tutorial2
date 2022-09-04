import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import Home from "./pages/Home";
import RedPage from "./pages/RedPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </BrowserRouter>
  );
}
