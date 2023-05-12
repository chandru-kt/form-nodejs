const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());
app.get('/users',db.getUser);
app.post('/users', db.createUser);
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });
