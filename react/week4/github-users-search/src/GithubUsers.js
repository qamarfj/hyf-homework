import React, { useContext } from "react";
import { UseGithub } from "./GithubsearchContext";

export default function GithubUsers() {
  const context = UseGithub();
  return (
    <>
      <input type="text" value={context.query} onChange={context.TextChange} />
      {console.log("main file")}
      {!context.error && context.isLoloading && <div>Loading....</div>}
      {!context.error &&
      context.users !== undefined &&
      context.users.length > 0 ? (
        <div>
          {context.users.map((user) => {
            return <div>{user.login}</div>;
          })}
        </div>
      ) : (
        <div>No Item</div>
      )}
      {context.error && <div>{context.error}</div>}
    </>
  );
}
