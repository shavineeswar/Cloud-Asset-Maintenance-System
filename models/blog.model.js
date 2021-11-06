const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Content: { type: String, required: true },
    PhotoLink: { type: String, required: true },
    Dateofpost: { type: String, required: true },
    Writer: { type: String, required: true },
   

});

const Blog = mongoose.model('blog', BlogSchema);
module.exports = Blog;