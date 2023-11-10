import { Link, useLocation } from 'react-router-dom';
import Logo from 'src/assets/letty.svg';

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <header className="fixed top-0 h-24 w-screen flex justify-between items-center px-16">
      <Link to="/">
        <img className="w-[120px]" src={Logo} alt="Letty Logo" />
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
