import { CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/whitelogo.png';

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-28 bg-[#314964] text-white shadow-md flex items-center justify-between z-10 px-12">
      <Link to="/home"><img src={logo} alt="Logo" className="w-16" /></Link>
      <nav className="flex gap-14 uppercase tracking-wider">
        <Link to="/home" className="hover:text-gray-300">Home</Link>
        <Link to="/peneiras" className="hover:text-gray-300">Peneiras</Link>
        <Link to="/historias" className="hover:text-gray-300">História</Link>
        <Link to="/comunidade" className="hover:text-gray-300">Comunidade</Link>
      </nav>
      <a href="#" className="text-4xl"><CircleUser className="w-9 h-9" /></a>
    </header>
  );
}
