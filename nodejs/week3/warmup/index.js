const express = require("express");
const bodyParser = require("body-parser");
const calculator = require("./calculator");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("nodejs week3 homework warmup"));
/*
Getting data through query parameters using GET
Going to localhost:300/calculator/add?firstParam=1&secondParam=2&secondParam=4 should respond with 7.
Going to localhost:300/calculator/subtract?firstParam=2&secondParam=1&secondParam=4 should respond with 1.
Going to localhost:300/calculator/multiply?firstParam=1&secondParam=2 should respond with 2.
Going to localhost:300/calculator/multiply?firstParam=1&secondParam=2&secondParam=4 should respond with 8.
Going to localhost:300/calculator/division?firstParam=4&secondParam=2&secondParam=4 should respond with 2.

*/
app.get("/calculator/add", async (req, res) => {
  try {
    const numbers = req.query;
    const sum = await calculator.getSum(numbers);
    res.json(sum);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/calculator/subtract", async (req, res) => {
  try {
    const numbers = req.query;
    const difference = await calculator.getSubtraction(numbers);
    res.json(difference);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/calculator/multiply", async (req, res) => {
  try {
    const multipliers = req.query;
    const product = await calculator.getProduct(multipliers);
    res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});
app.get("/calculator/division", async (req, res) => {
  try {
    const numerator = await parseFloat(req.query.firstParam);
    const denominator = await parseFloat(req.query.secondParam);

    if (denominator === 0) {
      res.status(400).send("Can't divid by zero");
    } else {
      const quotient = await calculator.getDivision(numerator, denominator);
      res.json(quotient);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

/**Getting data through the request body using POST
Going to localhost:300/calculator/add with the following key values: firstParam=1, secondParam=2. Should respond with 3.
Going to localhost:300/calculator/subtract with the following key values: firstParam=2, secondParam=1. Should respond with 1. 
Going to localhost:300/calculator/multiply with the following key values: firstParam=1, secondParam=2. Should respond with 2.
Going to localhost:300/calculator/division with the following key values: firstParam=1, secondParam=2. Should respond with 0.5.*/
app.post("/calculator/add", async (req, res) => {
  try {
    const numbers = req.body;
    const sum = await calculator.getSum(numbers);
    res.json(sum);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/calculator/subtract", async (req, res) => {
  try {
    const numbers = req.body;
    const difference = await calculator.getSubtraction(numbers);
    res.json(difference);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/calculator/multiply", (req, res) => {
  try {
    const multipliers = req.body;
    const product = calculator.getProduct(multipliers);
    res.send(product);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/calculator/division", async (req, res) => {
  try {
    const numerator = await parseFloat(req.body.firstParam);
    const denominator = await parseFloat(req.body.secondParam);

    if (denominator === 0) {
      res.status(400).send("Can't divid by zero");
    } else {
      const quotient = await calculator.getDivision(numerator, denominator);
      res.json(quotient);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
