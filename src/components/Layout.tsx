import { Header } from './Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation().pathname;
  const gradientBackground =
    location === '/' || location === '/login' || location.includes('/signup')
      ? true
      : false;
  return (
    <>
      <div
        className={`flex h-screen w-screen flex-col items-center justify-center ${
          gradientBackground
            ? 'bg-white bg-gradient-to-t from-[#15A09166] via-[#15A09166] to-white'
            : ''
        }`}
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
