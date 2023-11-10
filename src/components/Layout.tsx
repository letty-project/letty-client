import { Header } from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
