import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { userInfo } = useSelector((state) => state.user);
  const [nav, SetNav] = useState(false);
  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    <>
      <nav className="lg:container mx-auto px-6 border-2 flex justify-between items-center font-mono py-4">
        <div className="font-bold">MyBlog</div>
        <div
          className="block md:hidden"
          onClick={() => {
            handleNav();
          }}
        >
          {nav ? <FaBars /> : <FaBookOpen />}
        </div>
        <div className="hidden md:flex gap-2 justify-center items-center">
          <button
            type="button"
            className="text-black bg-secondary hover:bg-color-2 focus:ring-2 focus:ring-secondary font-medium rounded-lg text-sm px-4 py-1 "
          >
            {" "}
            <Link to="/login">
              {userInfo ? `${userInfo.name}` : "Login"}
            </Link>{" "}
          </button>
          <button
            type="button"
            className="text-black bg-secondary hover:bg-color-1 focus:ring-4 focus:ring-secondary font-medium rounded-lg text-sm px-4 py-1 "
          >
            {" "}
            <Link to={userInfo ? "/profile" : "/register"}>
              {" "}
              {userInfo ? "Profile" : "Register "}
            </Link>{" "}
          </button>
          {userInfo ? (
            <button
              type="button"
              className="text-black bg-secondary hover:bg-color-1 focus:ring-4 focus:ring-secondary font-medium rounded-lg text-sm px-4 py-1 "
            >
              {" "}
              <Link to={"/create"}>Create Post</Link>{" "}
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
      <div
        className={
          nav
            ? "bg-blue-400 w-[50%] h-screen absolute top-0 left-[0] py-4 ease-in-out duration-200"
            : "bg-red-400 w-[50%] h-screen absolute top-0 left-[-100%] py-4 ease-in-out duration-500 rounded-r-md"
        }
      >
        <ul className="flex flex-col justify-center items-center gap-6">
          <div className="font-bold">MyBlog</div>
          <button>Login</button>
          <button>Register</button>
          <li></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
