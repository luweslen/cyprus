const User = require("../models/User")

const AuthController = {
  loginScreen(request, response) {
    return response.render("login.ejs")
  },
  login(request, response) {
    const {email, password} = request.body
    
    const user = User.getByEmail(email)
    
    if(!user || user.password !== password){
      return response.redirect('/login')
    }

    const session = request.session;
    session.userId = user.id;

    return response.redirect('/messages')
  },
  logout(request, response) {
    request.session.destroy();

    return response.redirect('/login')
  },
  registerScreen(request, response) {
    return response.render("register.ejs")
  },
  register(request, response) {
    const { name, username, email, password } = request.body

    User.create({ name, username, email, password })

    return response.redirect('/login')
  }
}

module.exports = AuthController