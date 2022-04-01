var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    user: {
        name : String,
        email : String,
        age : Number
    }
},{timestamps:true});


var User = mongoose.model('User',userSchema);
module.exports(User)