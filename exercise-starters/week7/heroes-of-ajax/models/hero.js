var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name:               {type: String},
    powers:             {type: Array, default: []},
    weaknesses:         {type: Array, default: []},
    numAbs:             {type: Number},
    secretIdentity:     {type: String},
    capeColor:          {type: String},
    externalUnderwear:  {type: Boolean, default: true},
    canFly:             {type: Boolean, default: false}
});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');