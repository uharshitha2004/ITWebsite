import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-500 shadow-md">
      
      <Link to="/">
      <img
        src="/assets/logo.jpeg" 
        alt="Company Logo"
        className="h-20 w-48 object-contain" 
       />

      </Link>

      
      <ul className="flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
