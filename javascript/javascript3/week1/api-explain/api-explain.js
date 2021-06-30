/**TheCatApi // Developer Experience
Load https://api.thecatapi.com/v1/images/search
it will return Array of objects
we can access objet by index like data[0],
object contains key pair values which we can acces by keys fx. data[0].id 
*/
fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((catData) => {
    console.log(catData);

    console.log("id:", catData[0].id);
    console.log("url:", catData[0].url);
  });
