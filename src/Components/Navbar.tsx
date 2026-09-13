import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <img src={logo} alt="logo" className="w-25 h-25 object-contain" />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><a href="#" className="text-pink-600 hover:text-pink-400 transition-colors">Home</a></li>
          <li><a href="#technologies" className="text-gray-500 hover:text-pink-500 transition-colors">Technologies</a></li>
          <li><a href="#projects" className="text-gray-500 hover:text-pink-500 transition-colors">Projects</a></li>
          <li><a href="#about" className="text-gray-500 hover:text-pink-500 transition-colors">About</a></li>
          <li><a href="#contact" className="text-gray-500 hover:text-pink-500 transition-colors">Contact</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-500 hover:text-pink-500 transition-colors font-medium">
            Sign In
          </button>
          <button className="text-sm px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-400 transition-colors text-white font-medium">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;