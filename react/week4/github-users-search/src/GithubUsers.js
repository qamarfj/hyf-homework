import { UseGithub } from "./GithubsearchContext";

export default function GithubUsers() {
  const context = UseGithub();
  return (
    <>
      <h1>Github user searcher</h1>
      <input type="text" value={context.query} onChange={context.queryChange} />
      {!context.error && context.isLoloading && <div>Loading....</div>}
      {!context.error &&
      context.users !== undefined &&
      context.users.length > 0 ? (
        <div>
          {context.users.map((user) => {
            return (
              <div key={user.id}>
                <a
                  href={user.url}
                  target="_blank"
                  className="App-link"
                  rel="noreferrer"
                >
                  {user.login}
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Item</div>
      )}
      {context.error && <div>{context.error}</div>}
    </>
  );
}
