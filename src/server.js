const express = require('express');


const server = express();
const bodyParser = express.urlencoded({extended: false});

//custom modules
const {html, renderForm} = require('./template');
const {validate}=require('./validate');


//static
const staticHandler = express.static("public");
server.use(staticHandler);

//code
const posts=[];


server.get('/', (req, res) => {
    res.send(`${html(posts)}`);
});

server.post('/', bodyParser, (req, res)=>{
    const userInputs = {...req.body};   
    /*
    const forwardedIpsStr = req.header('x-forwarded-for');
    let IP = '';

   if (forwardedIpsStr) {
      IP = forwardedIpsStr.split(',')[0];  
      console.log(IP)
   }
   */
    //test here for error and generate err obj
    const errors = {};

    if (!userInputs.title) {
      errors.title = "Please enter title of haiku";
    }
    if (!userInputs.author) {
      errors.author = "Please enter author of haiku";
    }
    if (!userInputs.message) {
      errors.message = "Please enter author of haiku";
    }

    if (Object.keys(errors).length) {
      const body = renderForm(posts, errors, req.body);
      res.status(400).send(body);
    } else {
      const created = Date.now();
      posts.push(userInputs);
      console.log(posts);
      res.redirect("/");
    }
});

module.exports = server;
// Always keep module.exports at the bottom of the file
