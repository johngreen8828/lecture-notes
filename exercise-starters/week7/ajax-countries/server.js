// Requiring our dependencies

var express     = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    fileServer  = express.static('public'),
    countries   = require('./models/countries.json')
    // Routes      = require('./countries'),
    PORT        = process.env.PORT || 3000; // uses either the port from the environment, OR a hardcoded port

// If you use the module you are requiring ONCE - no need to store it in a variable

var app = express(); // create the express app object

// --- Mounting Middleware --- \\
app.use(morgan('common')); // Logs all requests coming into the server
app.use(fileServer); // serving static files from the public folder
// parsing request body from crappy strings into nice objects
app.use(bodyParser.json(), bodyParser.urlencoded({extended : true})); 
// require('./routes')(app); // shorthand for onetime variables
// Routes(app);
app.get('/countries', (req,res)=>{
    console.log('Getting Countries');
    res.json(countries);
})
app.post('/search', (req, res) =>{
    console.log(req.body);
    var result = countries.filter(function(element){
        return element.name == req.body.name;
    })
    res.send(result);
})
// require('./routes')(app); // shorthand for onetime variables
app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`)
});
// function(){} == ()=>{} // es6 arrow functions