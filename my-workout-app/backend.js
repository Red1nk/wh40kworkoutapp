const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/warhammer_workout',
  cloud: __dirname + '/cloud/main.js',
  appId: 'warhammer_workout_app_id',
  masterKey: 'warhammer_workout_master_key',
  serverURL: 'http://localhost:1337/parse',
});

const dashboard = new ParseDashboard({
  apps: [
    {
      appId: 'warhammer_workout_app_id',
      masterKey: 'warhammer_workout_master_key',
      serverURL: 'http://localhost:1337/parse',
      appName: 'Warhammer Workout',
    },
  ],
  users: [
    {
      user: 'Patrick',
      pass: 'Tangerine35!',
    },
  ],
});

app.use('/parse', api);
app.use('/dashboard', dashboard);

const port = 1337;
app.listen(port, () => console.log(`Warhammer Workout backend running on port ${port}`));