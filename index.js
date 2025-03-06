const express = require('express');
const app = express();
const functions = require('./arithmetic_functions');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  


  //Post method to add new user
app.post("/calculate", function (req, res) {
    
  let operation = req.body.operation;
    let value_1 = req.body.value_1;
    let value_2 = req.body.value_2;
    
    functions.sum(value_1, value_2);
    functions.sub(value_1, value_2);
    functions.mul(value_1, value_2);
    functions.div(value_1, value_2);

    console.log("The operation is " + operation);
    console.log("The first value is " + value_1);
    console.log("The second value is " + value_2);
    console.log("The result is: ", functions[operation](value_1, value_2));
  });
  
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });