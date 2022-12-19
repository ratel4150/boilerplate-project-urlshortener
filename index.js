require('dotenv').config(); 
const express = require('express');

/* const cors = require('cors'); */

const bodyParser = require("body-parser")
const fs = require('fs');
//create our express app
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

/* app.use(cors()); */
app.use(bodyParser.json());//para pasar el body a json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(`${process.cwd()}/public`));

//route

const routes=require('./routes/Route')

app.use('/',routes)



 app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
/* app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
}); 

app.post('/api/shorturl',function (req,res) {
const y=req.body.url
console.log(req.path)
res.json({hola:y})
  

})  */

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
