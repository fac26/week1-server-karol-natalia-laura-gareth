const express = require('express');


const server = express();
const bodyParser = express.urlencoded({extended: false});

//custom modules
const {html} = require('./template');
const {validate}=require('./validate');


//static
const staticHandler = express.static("public");
server.use(staticHandler);

//code
const posts=[];


server.get('/', (req, res) => {
    res.send(`Hello Big World! ${html(posts)}`);
});

server.post('/', bodyParser, (req, res)=>{
    const {title, author, message} = req.body;   


    //test here for error and generate err obj
    if(!validate(title)){
        console.log('invalid')
    }else{
        posts.push({title: title, author: author, message:message, id: 'x'});
    }
    
    
    res.redirect('/');
})

module.exports = server;
// Always keep module.exports at the bottom of the file
