//heroes controller

var Hero = require('../models/hero.js');

module.exports = {
    get: (req, res) => {
        // read data 
        Hero.find({}, (err, heroes) =>{
            res.json(heroes);
        })
    },

upsert: (req, res) => {
        if (req.params.id) {
            // update data
        }
        else {
            // no id in the url, so create a new document
            var newHero = new Hero(req.body);
            console.log(req.body);
            // save hero to database
            newHero.save((err, hero) => {
                if(err) {
                    return res.json(err);
                }
                else {
                    res.json(hero);
                }
            });
        }
    }
}