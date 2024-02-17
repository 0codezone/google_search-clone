import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (query) => {
    const api_key = "AIzaSyCJwRlPQhONFB7zHspLXBCQbq2dSRKJrbo";
    const cx = "445b8157604314158";
    const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx}&q=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data:", data);

      setSearchResults(data.items); // Assuming 'items' contain the search results
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{ fetchData, searchResults, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
