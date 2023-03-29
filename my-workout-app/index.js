const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = new ParseServer({
  databaseURI: 'http://localhost:5984/wh40kworkoutapp',
  appId: 'wh40kworkoutapp',
  masterKey: 'rSdvPXwwFxALuAxBKYaPYBafMRODxyckQjDYElUQhDYARZQwEwuYNGaMiYJBNxGOHNpswKtANoThvHKaaTPnNXZKWBUliiXRZMxLtoXxPQSnzctiNKOQpTrVqCgTGTHLJGGIFcxGLQpiLWqkblNrRVBAKJfwOdKeJxFLztuEyduRKSlDMSWgJKRHuFmdFNwgwlQqQunoYNTRlcZHJflYRrsAqyeosiEGgcYffkbzJdnQklpyxajyxgFMfQEcWqTM',
  serverURL: 'http://localhost:1337/parse'
});

app.use('/parse', api);

app.listen(1337, function() {
  console.log('Parse Server running on port 1337.');
});