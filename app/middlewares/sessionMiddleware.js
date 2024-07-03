const session = require("express-session");

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET, // Pour générer des SID aléatoires ==> rend les SID plus difficile à deviner
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // false pour HTTP
    maxAge: 24 * 60 * 60 * 1000 // 1 jour en milliseconds
  }
});

module.exports = sessionMiddleware;