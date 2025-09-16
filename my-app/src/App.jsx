import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import Peneiras from './components/Peneiras';
import Historias from "./components/Historias";
import Comunidade from './components/Comunidade';
import FormularioCadastro from "./components/FormularioCadastro";
import Login from './components/Login';

import './index.css';

function Home() {
  return <Slideshow />;
}

function App() {
  return (
    <Router>
      <div className="bg-[#e2e1d7aa] font-rubik min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><Header /><Home /><Footer /></>} />
          <Route path="/peneiras" element={<><Header /><Peneiras /><Footer /></>} />
          <Route path="/historias" element={<><Header /><Historias /><Footer /></>} />
          <Route path="/comunidade" element={<><Header /><Comunidade /><Footer /></>} />
          <Route path="/cadastro" element={<><Header /><FormularioCadastro /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//json-server --watch db.json --port 3001