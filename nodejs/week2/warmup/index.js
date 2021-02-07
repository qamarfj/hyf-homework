const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
/**GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).*/
app.get("/numbers/add/:first:second", (request, response) => {
  response.send(request.params.first);
});
app.get("/numbers/add", (req, res) => {
  res.json(sum(req.query.first, req.query.second));
});
/*GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second). */
app.get("/numbers/multiply/:first/:second", (req, res) => {
  res.json(multiply(req.params.first, req.params.second));
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}
