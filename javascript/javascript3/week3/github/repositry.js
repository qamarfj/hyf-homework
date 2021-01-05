//const fetch = require("node-fetch");
const container = document.getElementById("container");
const githubURL = "https://api.github.com/search/repositories?q=user:";
const user1 = "tithi1244";
const user2 = "aijazraja";
const user3 = "sofiiadidovych";
const promise1 = fetch(githubURL + user1);
const promise2 = fetch(githubURL + user2);
const promise3 = fetch(githubURL + user3);

Promise.all([promise1, promise2, promise3])
  .then((Responses) =>
    Promise.all([Responses[0].json(), Responses[1].json(), Responses[2].json()])
  )
  .then((repositories) => {
    repositories.forEach((data) => render(data));
  })
  .catch((e) => console.log("errrrrr: ", e));
// @ts-ignore
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
function render(data) {
  const li = document.createElement("li");
  li.textContent = data.items[0].owner.login.capitalize() + "'s repositories";
  container.appendChild(li);
  const ul = document.createElement("ul");
  for (const respot of data.items) {
    const li = document.createElement("li");
    li.textContent = respot.name + "  : " + respot.html_url;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}
