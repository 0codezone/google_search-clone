import React from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
      <div className="shadow-md rounded-lg border ">
        <input type="text" className="rounded-l-lg p-2 outline-none" />
        <button className="p-2  hover:bg-gray-200 dark:hover:bg-gray-700">
          Search
        </button>
      </div>
      <div className="py-2 flex gap-4 ">
        <Link
          to={"/search"}
          className="border rounded-xl p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 "
        >
          Search
        </Link>
        <Link
          to={"/images"}
          className="border rounded-xl p-1.5  hover:bg-gray-200 dark:hover:bg-gray-700 "
        >
          Images
        </Link>
        <Link
          to={"/videos"}
          className="border rounded-xl p-1.5  hover:bg-gray-200 dark:hover:bg-gray-700 "
        >
          Videos
        </Link>
        <Link
          to={"/news"}
          className="border rounded-xl p-1.5  hover:bg-gray-200 dark:hover:bg-gray-700 "
        >
          News
        </Link>
      </div>
    </div>
  );
};
