const crypto = require('node:crypto');
const RandomString = require('./randomString');
const key = Buffer.from(process.env.SESSION_KEY, 'utf-8'); 
const iv = Buffer.from(process.env.SESSION_IV, 'utf-8');
const algorithm = 'aes-256-cbc'

const cipher = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
const decipher = (text)=>{
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

console.log('Random SESSION_KEY', RandomString(32))
console.log('Random SESSION_IV', RandomString(16))

module.exports = {
  cipher,
  decipher,
}