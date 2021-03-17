import React, { useEffect, useState } from "react";
const API_URL = "https://api.github.com/search/users?q=";

export default function GithubsearchContext() {
  const [isLoloading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

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
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {!error && isLoloading && <div>Loading....</div>}
      {!error && users !== undefined && users.length > 0 ? (
        <div>
          {users.map((user) => {
            return <div>{user.login}</div>;
          })}
        </div>
      ) : (
        <div>No Item</div>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
