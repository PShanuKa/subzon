import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";
import Category from "./Pages/Category";
import { useEffect } from "react";
import LoginCard from "./Pages/LoginPage";
import RegisterCard from "./Pages/RegisterPage";
import Dashboard from "./Pages/Dashboard";
import EditProfile from "./Pages/EditProfile";
import CreateBlog from "./Pages/CreateBlog";
import Profile from "./Components/Profile";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
