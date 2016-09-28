var express     = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    fileServer  = express.static('public'),

    PORT = process.env.PORT || 3000; 

// Create Express App Object \\
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(fileServer);

app.get('', (req, res) => {
    console.log('Get Server');
});

app.post('', (req, res)=> {
    console.log('Post Server');
});

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT)
})