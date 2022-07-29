const express = require('express')
const routes = express.Router()

const Auth = require('./controllers/Auth')
const Messages = require('./controllers/Messages')

routes.get("/", (request, response) => {
  const session = request.session

  if(!session.userId){
    return response.redirect('/login')
  }
  
  return response.redirect('/messages')
});

routes.get("/login", Auth.loginScreen);
routes.post("/login", Auth.login);

routes.get("/register", Auth.registerScreen);
routes.post("/register", Auth.register);

routes.get("/logout", Auth.logout);

routes.get("/messages", Messages.index);
routes.get("/messages/new", Messages.newMessageScreen);
routes.post("/messages", Messages.create);

module.exports = routes