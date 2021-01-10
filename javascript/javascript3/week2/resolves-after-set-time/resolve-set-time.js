function promiseResolveAfter(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}
//use it with .then
promiseResolveAfter(8).then(() => {
  console.log("I am called asynchronously by .then"); // logged out after 8 seconds
});

// use it with async/awai
async function resolveAsync() {
  const resolver = await promiseResolveAfter(8);
  console.log("I am called asynchronously from async/await"); // logged out after 8 seconds
}
resolveAsync();
