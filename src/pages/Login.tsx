import { Card } from '../components/Card';
import DottedLine from '../assets/dotted-line.svg';

function Login() {
  return (
    <>
      <Card />
      <img
        className="fixed left-4 bottom-0"
        src={DottedLine}
        alt="Dotted Line"
      />
    </>
  );
}

export default Login;
