import { Route, Routes } from "react-router-dom";
import All from "../components/All";
import Main from "../pages/Layout";

const Home = () => {
  return (
    <Routes>
      <Route key={"main"} element={<Main />}>
        <Route index element={<All />} />
      </Route>
    </Routes>
  );
};

export default Home;
