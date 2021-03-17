import "./App.css";
import GithubUsers from "./GithubUsers";
import GithubsearchContext from "./GithubsearchContext";
function App() {
  return (
    <div className="App App-header">
      <h1>Github user searcher</h1>
      <GithubsearchContext>
        <GithubUsers />
      </GithubsearchContext>
    </div>
  );
}

export default App;
