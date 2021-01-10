function waiting() {
  console.log("waiting for 3 seconds:");
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
waiting().then(() =>
  fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  )
    .then((response) => response.json())
    .then((movies) => {
      console.log(movies);
    })
    .catch((error) => console.log(error))
);

async function waitAndfetch() {
  try {
    await waiting();
    const response = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await response.json();
    console.log(movies);
  } catch (error) {
    console.log(error);
  }
}
waitAndfetch();
