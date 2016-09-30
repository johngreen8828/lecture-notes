// User Profile methods.  These are the route handlers that will do the actual work of 
//accessing the database.

var userProfile = require('../models/userProfile.js');

module.exports = {
    
    get: (req, res) => {
        // read data 
        userProfile.find({}, (err, userProfiles) =>{
            res.json(userProfiles);
        })
    },

    

    upsert: (req, res) => {
        if (req.params.id) {
            // update data
        }
        else {
            // no id in the url, so create a new document
            var newUserProfile = new userProfile(req.body);
            console.log(req.body);
            // save userProfile to database
            newUserProfile.save((err, userProfile) => {
                if(err) {
                    return res.json(err);
                }
                else {
                    res.json(userProfile);
                }
            });
        }
    }
}