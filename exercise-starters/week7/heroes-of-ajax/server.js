var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    Routes = require('./routes');

var port = process.env.PORT || 3000; 

var app = express();    


mongoose.connect('mongodb://localhost/heroes-of-ajax', function(error){
    if(error){
        console.error("Could not start mongoose! ", error);
        process.exit(1);
    }
    else {
        console.log("Mongoose started successfully!");
    }
})



// home route
// app.get('/', (req, res) =>{
//     res.send("Heroes of AJAX");
// });

app.post('*', bodyParser.json(), bodyParser.urlencoded({extended:true}));
Routes(app);




app.listen(port, (error) => {
    if(error) {
        console.error("Server could not start! ", error);
        process.exit(1); // exits node application, anything other than 0 is considered an error
    }
    else{
        console.log("Server started!");
    }
});