const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('dist'));

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.listen(3030, () => {
  console.log('OMDB API Client app listening on port 3030')
});