import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Mailing from './pages/Mailing';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
