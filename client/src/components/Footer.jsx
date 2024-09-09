import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">HomeHub</h3>
            <p className="text-gray-400">
              HomeHub is your trusted platform for renting and buying homes.
              Find your perfect home with ease.
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow me</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/fentahun360"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitterSquare size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/fentahun-mengie-1820bb301/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} HomeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
