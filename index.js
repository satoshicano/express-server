const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), () => console.log('Example app listening on port 5050!'));

app.get('/', (req, res) => res.send('ok'));

app.post('/webhook', (req, res) => {
  console.log(req);
  res.send("ok")
})