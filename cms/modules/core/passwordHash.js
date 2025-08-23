const crypto = require('crypto');
module.exports = (password)=>{
const salt = process.env.PASSWORD_HASH
const hash = crypto.createHash('sha256');
hash.update(salt+password+salt);
const hashHex = hash.digest('hex');
return hashHex;
}