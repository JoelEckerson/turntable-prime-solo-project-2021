const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const albumRouter = require('./routes/album.router');
const collectionRouter = require('./routes/collection.router');
const wantlistRouter = require('./routes/wantlist.router');
const searchRouter = require('./routes/search.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

//required for socket.io
io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
});

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/album', albumRouter);
app.use('/api/collection', collectionRouter);
app.use('/api/wantlist', wantlistRouter);
app.use('/api/search', searchRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

// port for socket.io
http.listen(4000, function() {
  console.log('listening on port: 4000')
})

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
