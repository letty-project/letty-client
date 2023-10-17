import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div>로고</div>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </header>
  );
};

export default Header;
