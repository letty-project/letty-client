import { Link } from "react-router-dom";
import Logo from "../assets/letty-icon.svg";

const Header = () => {
  return (
    // <header className="h-28 w-screen fixed top-0"> 람쥐
    <header className="flex flex-row justify-between px-40 py-5">
      <Link to="/">
        <div>
          <img
            className="fixed left-[125px] w-[150px] h-[125px]"
            src={Logo}
            alt="Letty Logo"
          />
        </div>
      </Link>
      <Link to="/login">
        <button className="btn w-32 text-sm text-white bg-primary-default">
          Login
        </button>
      </Link>
    </header>
  );
};

export default Header;
