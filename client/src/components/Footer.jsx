import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
        {/* Social Media Section */}
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-xl">Follow me</h3>
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

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} HomeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
