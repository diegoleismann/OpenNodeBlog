const mongoose = require('mongoose');
module.exports = function(){
    const db = mongoose.createConnection(process.env.MONGODB, (err)=>{console.log(err)});
    return db;
}