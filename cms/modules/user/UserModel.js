
const mongoose = require('mongoose')
const connect = require('../../modules/core/configDb.js')
const Schema = mongoose.Schema
const db = connect();
const UserModel = db.model('User', new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  status: String,
  role_id: String,
}));


module.exports = UserModel;