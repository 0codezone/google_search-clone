import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-1 flex flex-wrap sm:justify-between justify-between border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-evenly space-x-5 md:w-2/4">
        <Link to="/">
          <p className="text-2xl font-bold text-blue py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google
          </p>
        </Link>
        <Search />
      </div>
      <div className="">
        <button
          type="button"
          className="text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "💡" : "🌙"}
        </button>
      </div>

      {/* ---------------------------  */}
    </div>
  );
};
