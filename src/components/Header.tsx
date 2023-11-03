import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/letty-icon.svg';

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <header className="h-28 w-screen fixed top-0">
      <Link to="/">
        <img
          className="fixed left-[125px] w-[150px] h-[125px]"
          src={Logo}
          alt="Letty Logo"
        />
      </Link>
      {location === '/' && (
        <Link to="/login">
          <button className="btn w-32 text-sm text-white bg-primary-default">
            Login
          </button>
        </Link>
      )}
    </header>
  );
};
