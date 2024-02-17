import React, { useState } from "react";
import { NavLink } from "./NavLink";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);

  // useEffect(() => {
  //   if (debouncedValue) {
  //     setSearchTerm(debouncedValue);
  //   }
  // }, [debouncedValue, setSearchTerm]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(debouncedValue);
    }
  };

  return (
    <div className="flex  flex-col ">
      <div className="relative">
        <input
          value={text}
          type="text"
          className="py-2 px-4 block w-80 sm:w-96 rounded-lg shadow-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400"
          placeholder="🔎 Search Google or Type URL"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        {text !== "" && (
          <button
            onClick={() => setText("")}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 dark:text-gray-300"
          >
            X
          </button>
        )}
      </div>
      <NavLink />
    </div>
  );
};
