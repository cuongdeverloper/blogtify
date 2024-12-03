const express = require('express');
const configViewEngine = require('./config/ViewEngine.js');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8888;
const connection = require('./config/database.js');
const { routerApi } = require('./routes/route.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Set to true if using HTTPS
  }));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session()); // Enable passport session support
  

// Configure CORS
app.use(cors({
    origin: ['http://localhost:1919'],
    credentials: true,
}));
configViewEngine(app);
app.get("/", (req, res) => {
    res.json("Hello");
})
app.use('/', routerApi);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
 // Connect to the database and start the server

 (async () => {
    try {
      await connection();
      app.listen(port, '0.0.0.0', () => {
        console.log(`Backend app listening on http://localhost:${port}`);
      });
  
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  })();
  