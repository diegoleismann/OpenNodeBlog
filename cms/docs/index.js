const users = {
  "/users/search/":{
    "description":"Get users by search",
    "method":"POST",
    "body":{
      "text":"search TEXT in name, email"
    }
  },
  "/users/auth/":{
    "description":"Authenticate User",
    "method":"POST",
    "body":{
      "email":"user email",
      "password":"user password"
    }
  },

}

module.exports = {
  "/users": users
}