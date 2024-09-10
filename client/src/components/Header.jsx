import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

function Header() {
  const { currentUser } = useSelector((state) => state.user.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  function handleToggleMenu() {
    setMenuOpen((open) => !open);
  }

  return (
    <header className="bg-slate-200 h-[100px] fixed  top-0 w-full  p-3 z-30 shadow-md">
      <div className="flex justify-between items-center p-3 w-[95vw]">
        <Link to="/">
          <h1 className="font-bold md:text-3xl text-blue-600 transition-colors hover:opacity-85">
            HomeHub
          </h1>
        </Link>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Hamburger Menu Icon for Mobile */}
        <div>
          <div className="sm:hidden ">
            <button onClick={handleToggleMenu} className="text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row gap-4 text-xl text-blue-600 items-center absolute sm:static top-20 left-0 w-full bg-slate-200 sm:bg-transparent p-5 sm:p-0 shadow-md sm:shadow-none`}
          >
            <Link to="/" onClick={handleToggleMenu}>
              <li className="p-2 rounded-md hover:text-green-700">Home</li>
            </Link>
            <Link
              to="/"
              state={{ scrollTo: "about" }}
              onClick={handleToggleMenu}
            >
              <li className="p-2 rounded-md hover:text-green-700">About</li>
            </Link>

            <Link to="/profile" onClick={handleToggleMenu}>
              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="profile"
                  className="rounded-full w-7 h-7 object-cover"
                />
              ) : (
                <li className="p-2 rounded-md hover:text-green-700">Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
