import React, { useEffect, useState, createContext, useContext } from "react";
const API_URL = "https://api.github.com/search/users?q=";
export const GithubContext = createContext();

export default function GithubsearchContext({ children }) {
  const [isLoloading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [app, setApp] = useState("usersSearch");
  const [repos, setRepos] = useState([]);
  const contextValue = {
    isLoloading,
    error,
    query,
    users,
    app,
    repos,
    setRepos,
    queryChange: (e) => {
      setQuery(e.target.value);
    },
    appSet: (e) => {
      setApp(e.target.value);
    },
  };
  useEffect(() => {
    async function fetchGithub() {
      if (query !== "") {
        try {
          setIsLoading(true);
          const response = await fetch(API_URL + query);
          const data = await response.json();
          setIsLoading(false);
          if (data.message !== undefined) throw new Error(data.message);
          if (data.items.length > 0) setUsers(data.items);
        } catch (error) {
          setError(error.toString());
          setIsLoading(false);
        }
      }
      return null;
    }
    fetchGithub();
  }, [query]);

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}
export function UseGithub() {
  const context = useContext(GithubContext);
  return context;
}
