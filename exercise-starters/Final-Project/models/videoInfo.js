var mongoose = require('mongoose');

var videoInfoSchema = mongoose.Schema({
    videoURL:           {type: String},
    refID:              {type: String},
});

module.exports = mongoose.model('videoInfo', videoInfoSchema);