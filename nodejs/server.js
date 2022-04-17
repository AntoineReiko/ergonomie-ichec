// Import express 
const { request } = require('express');
let express = require('express');
const res = require('express/lib/response');

// Initializethe app 
let app = express();

// Sendmessage for default URL
//app.get('/', (request, response) => response.send('Hello World !'));


//EJS
app.set("views", "./views")
app.set("view engine","ejs")

//
let todo = ["Faire les courses","Nourir le chat"];
let tache = "test";

// Add an item 
// let newtache = request.body.newtache;
// todo.push(newtache); 


// Setup server port 
let port = 3000;

// Launch app to listento specified port
app.listen(port, function() {
     console.log("Server running on port"  + port);
    });


//settingmiddleware 
app.use(express.static('public'));

//Setroute 
// app.get('/',(request,response) =>{ 
//     response.render('todo.ejs',{todo: todo});});

app.get('/',(request,response) =>{ 
    response.render('todo.ejs',{todo: todo});});



app.get("./:newtache",(req,res) => {
    res.render("todo.ejs",{tache: request.params.newtache});
});
