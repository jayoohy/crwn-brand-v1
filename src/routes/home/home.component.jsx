import { Outlet } from "react-router-dom";
// import Directory from "../../components/directory/directory.component";
import Collection from "../../components/collection/collection.component";

const Home = () => {
  return (
    <>
      <Collection />
      <Outlet />
    </>
  );
};

export default Home;
