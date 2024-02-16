import React, { useState, useEffect } from "react";
import { NavLink } from "./NavLink";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue, setSearchTerm]);

  return (
    <div className="flex justify-center items-center flex-col w-screen">
      <div className="shadow-md rounded-lg border ">
        <input
          value={text}
          type="text"
          className="rounded-l-lg p-2 outline-none"
          placeholder=" 🔎 Search Google or Type url"
          onChange={(e) => setText(e.target.value)}
        />

        {text !== "" && (
          <button
            onClick={() => setText("")}
            className="p-2  hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            X
          </button>
        )}
        {/* <button className="p-2  hover:bg-gray-200 dark:hover:bg-gray-700"> 
          Search
        </button> */}
      </div>

      <NavLink />
    </div>
  );
};
