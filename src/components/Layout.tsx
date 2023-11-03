import { Header } from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white bg-gradient-to-t from-[#15A09166] via-[#15A09166] to-white flex justify-center items-center flex-col">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
