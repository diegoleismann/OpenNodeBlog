const crypto = require('node:crypto');
const RandomString = require('./randomString');
const keyString = process.env.SESSION_KEY
const ivString = process.env.SESSION_IV
if (!keyString || !ivString) {
  throw new Error('SESSION_KEY and SESSION_IV must be set in environment variables');
}
const key = Buffer.from(keyString, 'utf-8');
const iv = Buffer.from(ivString, 'utf-8');
const algorithm = 'aes-256-cbc'

const cipher = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
const decipher = (text) => {
  console.log(text);
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