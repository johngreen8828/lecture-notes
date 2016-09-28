var mongoose = require('mongoose');

var userLogInSchema = mongoose.Schema({
    name:               {type: String},
    email:              {type: String},
    password:           {type: String},
    refID:              {type: String},
});

module.exports = mongoose.model('userLogIn', userLogInSchema);

