import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.component";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SiginPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="category/:slug" element={<CategoryPage />} />
        <Route path="signIn" element={<SignInPage />} />
      </Route>
    </Routes>
  );
}
