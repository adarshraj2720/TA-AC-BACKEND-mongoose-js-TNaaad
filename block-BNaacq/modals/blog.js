var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var blogSchema = new Schema({
    articles: String ,
    comments: [String],
    user: String
}, { timestamps: true });

var blog = mongoose.model('Blog', blogSchema);

module.exports = blog;