const Message = require("../models/Message")

const MessagesController = {
  index(request, response) {
    const session = request.session

    if(!session.userId){
      return response.redirect('/login')
    }

    const messages = Message.getByUserId(session.userId)

    return response.render("messages.ejs", { messages })
  },
  newMessageScreen(request, response) {
    const session = request.session

    if(!session.userId){
      return response.redirect('/login')
    }

    return response.render("new-message.ejs")
  },
  create(request, response) {
    const { text } = request.body
    const session = request.session

    if(!session.userId){
      return response.redirect('/login')
    }

    Message.create({ text, userId: session.userId })

    return response.redirect('/messages')
  },
}

module.exports = MessagesController