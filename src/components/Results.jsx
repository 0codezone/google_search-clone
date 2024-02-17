import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../contexts/ResultContextProvider";
import ReactPlayer from "react-player";

export const Results = () => {
  const { fetchData, searchResults, loading, searchTerm } = useResultContext();

  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        fetchData(`/search?q=${searchTerm} videos`);
      } else {
        fetchData(`${location.pathname}/q=${searchTerm}&num=10`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <div className="h-screen">Loading...</div>;

  switch (location.pathname) {
    case "/search":
      return (
        <>
          {/* <div>
          <p className="text-sm">
            About {searchResults?.searchInformation.formattedTotalResults} results (
            {searchResults?.searchInformation.formattedSearchTime} seconds)
          </p>
        </div> */}
          <div className="space-y-6 sm:px-56 px-10 py-10">
            {searchResults.map(({ link, title, snippet }, index) => (
              <div key={index} className="md:w-2/3 w-full pb-5">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-xs">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                  <p className="text-sm  ">{snippet}</p>
                </a>
              </div>
            ))}
          </div>
        </>
      );
    case "/images":
      return (
        <div className="text-5xl"> Images </div>
        // <div className="flex flex-wrap justify-center items-center space-x-4">
        //   {searchResults.map(({ title, link }, index) => (
        //     <a
        //       href={link}
        //       target="_blank"
        //       rel="noreferrer"
        //       key={index}
        //       className="sm:p-3 p5"
        //     >
        //       {/* <img src={link.src} alt={title}  loading="lazy"  /> */}
        //       <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
        //     </a>
        //   ))}
        // </div>
      );

    case "/news":
      return (
        <div className="space-y-6 sm:px-56 px-10 py-10">
          {searchResults.map(({ link, title, snippet }, index) => (
            <div key={index} className="md:w-2/3 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm md:w-4/5">{snippet}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="text-5xl"> Videos </div>

        // <div className="flex flex-wrap justify-center items-center space-x-4">
        //   {searchResults.map(({ video }, index) => (
        //     <div key={index} className="p-2">
        //       <ReactPlayer url={video} controls width="355px" height="200px" />
        //     </div>
        //   ))}
        // </div>
      );

    default:
      return "Error";
  }
};
