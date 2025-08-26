const RandomString =  (size = 16)=>{
  let result = '';
  const hexChars = '0123456789abcdef';
  for (let i = 0; i < size; i++) {
    result += hexChars[Math.floor(Math.random() * 16)];
  }
  return result;
}

module.exports = RandomString