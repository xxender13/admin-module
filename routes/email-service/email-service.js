


var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.post('/', function(req, res, next) {
  async function callMicroserviceB() {
    try {
      const username = req.body.username;
      console.log("soln:", req.body.username);
      // Replace 'http://microservice-b-url' with the actual URL of Microservice B
      const response = await axios.post('http://localhost:5001/send-email/', {username});
      console.log('Data from Microservice B:', response.data);
    } catch (error) {
      console.error('Error calling Microservice B:', error);
    }
  }
  
  // Invoke the function
  callMicroserviceB();
  res.json ('index donor');
});

module.exports = router;
