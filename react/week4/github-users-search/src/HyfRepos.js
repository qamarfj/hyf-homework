import { useEffect } from "react";
import { UseGithub } from "./GithubsearchContext";
const API_Hyf_URL = "https://api.github.com/users/HackYourFuture-CPH/repos";
export default function HyfRepos() {
  const context = UseGithub();

  useEffect(() => {
    const fetchHyfRepos = async () => {
      try {
        const response = await fetch(API_Hyf_URL);
        const repositories = await response.json();
        context.setRepos(repositories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHyfRepos();
  }, []);

  return (
    <div>
      <h1> HackYourFuture-CPH GithubRepos</h1>
      {context.repos.map((repo) => {
        return (
          <div key={repo.id}>
            <a
              href={repo.owner.url}
              target="_blank"
              className="App-link"
              rel="noreferrer"
            >
              {repo.full_name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
