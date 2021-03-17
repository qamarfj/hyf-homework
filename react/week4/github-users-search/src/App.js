import "./App.css";
import GithubUsers from "./GithubUsers";
import { UseGithub } from "./GithubsearchContext";
import React from "react";
import HyfRepos from "./HyfRepos";

function App() {
  const context = UseGithub();
  return (
    <div className="App App-header">
      <div>
        <button value="usersSearch" onClick={context.appSet}>
          Users Search
        </button>
        <button value="hyfRepos" onClick={context.appSet}>
          HackYourFuture-CPH Repos
        </button>
      </div>

      {context.app === "usersSearch" && <GithubUsers />}
      {context.app === "hyfRepos" && <HyfRepos />}
    </div>
  );
}

export default App;
