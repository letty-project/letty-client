import { Link } from 'react-router-dom';
import Logo from '../assets/letty.svg';

const Header = () => {
  return (
    // <header className="h-28 w-screen fixed top-0"> 람쥐
    <header className="w-screen justify-center">
      <div className="flex flex-row justify-between items-center h-24 mx-10">
        <Link to="/">
          <div>
            <img className="w-[100px]" src={Logo} alt="Letty Logo" />
          </div>
        </Link>
        <Link to="/login">
          <button className="btn w-32 text-sm text-white bg-primary-default">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
