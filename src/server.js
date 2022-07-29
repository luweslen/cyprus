const express = require('express')
const sessions = require('express-session')
const path = require('path')

const routes = require('./routes')

const server = express()

server.set("view engine", "ejs")
server.set('views', path.join(__dirname, "views"))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

const oneDayInSeconds = 1000 * 60 * 60 * 24;

server.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDayInSeconds },
    resave: false 
}));

server.use(routes)

server.listen(3000, () => console.log('Server run'))