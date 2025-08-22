const mongoose = require('mongoose');
const db = mongoose.createConnection(process.env.MONGODB);
export default db
    