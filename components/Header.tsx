export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Weather App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
