import { Link } from 'react-router-dom';
import Logo from '../assets/letty-icon.svg';

type Props = {
  showLoginButton: boolean;
  setShowLoginButton: (showLoginButton: boolean) => void;
};

export const Header = ({ showLoginButton, setShowLoginButton }: Props) => {
  return (
    <header className="h-28 w-screen fixed top-0">
      <Link to="/">
        <img
          className="fixed left-[125px] w-[150px] h-[125px]"
          src={Logo}
          alt="Letty Logo"
        />
      </Link>
      {showLoginButton && (
        <Link to="/login">
          <button
            onClick={() => setShowLoginButton(!showLoginButton)}
            className="btn w-32 text-sm text-white bg-primary-default"
          >
            Login
          </button>
        </Link>
      )}
    </header>
  );
};
