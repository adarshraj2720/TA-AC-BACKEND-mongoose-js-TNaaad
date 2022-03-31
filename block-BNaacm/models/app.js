var mongoose = require('mongoose');

var Schema =mongoose.Schema;


var user = mongoose.model('User',articleSchema);

var articleSchema = new Schema({
    title:String,
    description:String
})



module.exports = user;
