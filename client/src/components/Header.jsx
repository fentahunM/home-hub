import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png

function Header() {
  const { currentUser } = useSelector((state) => state.user.user);
  return (
    <header className="bg-slate-200  shadow-md">
      <div className=" flex justify-between items-center mx-auto p-3 max-w-6xl ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">HomeHub</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline ">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full w-7 h-7 object-cover"
              />
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline ">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
