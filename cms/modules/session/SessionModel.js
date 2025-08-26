const mongoose = require('mongoose')
const connect = require('../../modules/core/configDb.js')
const Schema = mongoose.Schema
const db = connect();
const SessionModel = db.model('Session', new Schema({
  token: String,
  user_id: Schema.Types.ObjectId
}));

module.exports = SessionModel;
