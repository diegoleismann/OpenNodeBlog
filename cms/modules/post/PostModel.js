
const mongoose = require('mongoose')
const connect = require('../core/configDb.js');
const Schema = mongoose.Schema
const db = connect();
const PostModel = db.model('Post', new Schema({
  title: String,
  created_at: String,
  status: String,
  content: String,
  url: String,
  author_id: Schema.Types.ObjectId
}));


module.exports = PostModel;