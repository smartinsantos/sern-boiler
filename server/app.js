import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Set up the express app
const app = express();
const port = parseInt(process.env.SERVER_PORT, 10) || 5000;
// setting port
app.set('port', port)
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Parse incoming cookies
app.use(cookieParser());
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Nothing here...',
}));

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`ˁᵒ͡ˑ̉ᵒˀ Server running on port: ${port}`)
});
