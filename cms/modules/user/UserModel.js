
const { Schema } = require('mongoose')
const db = require('../../modules/core/configDb');
db.model('User', new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    status: String,
    role_id: String,
}));

export default db;