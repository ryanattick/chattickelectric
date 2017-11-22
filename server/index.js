const express = require('express');
const bodyParser = require('body-parser');
const map = require('google_directions');
const nodemailer = require('nodemailer');
const router = express.Router();
const config = require('../config.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/email', router);
router.post('/', handleEmail);
function handleEmail(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    body = JSON.parse(body);
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'chattickmail@gmail.com',
        pass: process.env.MAIL || config.MAIL
      }
    });
    var mailOptions = {
      from: 'chattickmail@gmail.com',
      to: 'chattickmail@gmail.com',
      subject: body.email + ' -- ' + body.subject,
      text: body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
        res.json({yo: 'error'});
      }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
      };
    });
  });
}

app.post('/map', (req, res) => {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk;
  });
  req.on('end', function() {
    var params = {
      origin: JSON.parse(body).location,
      destination: "10485 Theodore Green Blvd, White Plains, MD",
      key: process.env.DIRECTIONS || config.DIRECTIONS
    };
    map.getDirectionSteps(params, function (err, steps) {
      if (err) {
        console.log(err);
        return 1;
      }

      var output = [];
      var stepCounter = 1;
      steps.forEach(function(stepObj) {
        var instruction = stepObj.html_instructions;
        instruction = instruction.replace(/<[^>]*>/g, "");
        var distance = stepObj.distance.text;
        var duration = stepObj.duration.text;
        output.push("Step " + stepCounter + ": " + instruction + " ("+ distance +"/"+ duration+")");
        stepCounter++;
      });
      res.json(output);
    });

  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000!');
});
