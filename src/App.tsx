import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* 추후에 아래에 <Login /> 대신 <Signup /> 추가 */}
          <Route path="signup" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
