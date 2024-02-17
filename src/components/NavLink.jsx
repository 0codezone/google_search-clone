import React from "react";
import { Link } from "react-router-dom";

export const NavLink = () => {
  return (
    <div className="py-2 flex gap-4 ">
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
  );
};
