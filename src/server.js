const express = require('express');


const server = express();
const bodyParser = express.urlencoded({extended: false});

//custom modules
const {html} = require('./template');
const {sanitize} = require('./validate');
const {deleteHandler} = require('./deleteHandler');
let idCount=0;
//static
const staticHandler = express.static("public");
server.use(staticHandler);

//code
const posts=[];


server.get('/', (req, res) => {
    res.send(`${html(posts)}`);
});

server.post('/', bodyParser, (req, res)=>{
    const userInputsS = {...req.body};  
    
    const userInputs = sanitize(userInputsS);
    
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
      const body = html(posts, errors, req.body);
      res.status(400).send(body);
    } else {
        idCount++;
        posts.push({id: idCount, ...userInputs});   
        res.redirect("/");
    }
});

server.post('/delete/:id', bodyParser,(req, res)=>{
    const id = req.params.id;
    deleteHandler(id, posts);
    res.redirect('/')
})

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

module.exports = server;
// Always keep module.exports at the bottom of the file
