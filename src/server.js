const express = require('express');


const server = express();
const bodyParser = express.urlencoded({extended: false});

//custom modules
const {html} = require('./template');
const {validate}=require('./validate');
const {deleteHandler} = require('./deleteHandler');
let idCount=0;
//static
const staticHandler = express.static("public");
server.use(staticHandler);

//code
const posts=[];


server.get('/', (req, res) => {
    res.send(`Hello Big World! ${html(posts)}`);
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
    if(!validate(userInputs)){
        console.log('invalid')
    }else{
        //add id to each post and increment
        idCount++;
        posts.push({id: idCount, ...userInputs});
        console.log(posts)
    }
    
    
    res.redirect('/');
})

server.post('/delete/:id', bodyParser,(req, res)=>{
    const id = req.params.id;
    deleteHandler(id, posts);
    console.log(id)
   
    res.redirect('/')
})

module.exports = server;
// Always keep module.exports at the bottom of the file
