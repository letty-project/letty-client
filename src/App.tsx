import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Mailbox from './pages/Mailbox';
import Mailing from './pages/Mailing';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Login />} />
          <Route path="signup/:step" element={<Signup />} />
          <Route path="mailing" element={<Mailing />} />
          <Route path="mailbox" element={<Mailbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
