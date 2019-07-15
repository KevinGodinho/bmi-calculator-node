const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


// This is a calculator that handles simple addition
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  const result = num1 + num2;

  res.send('Your answer is ' + result);
})


// This is a BMI calculator
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  const bmi = Math.floor(weight / Math.pow(height, 2));

  res.send('Your BMI is ' + bmi + 'ish')
})

app.listen(port, () => console.log('Server is running'))
