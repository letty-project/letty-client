import Header from "./Header1";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className=" flex h-screen w-screen flex-col">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
