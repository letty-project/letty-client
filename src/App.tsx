import Layout from 'src/components/Layout';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Mailing from 'src/pages/Mailing';
import Signup from 'src/pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
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
}

export default App;
