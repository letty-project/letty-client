import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row justify-between">
      <Link to="/">
        <div>로고</div>
      </Link>
      <Link to="/login">
        <button className="bg-primary-default">Login</button>
      </Link>
    </header>
  );
};

export default Header;
