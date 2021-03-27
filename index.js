var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:a55602080A@localhost:5432/Test');

const express = require('express');
const app = express();
const port = 3000;

app.get('/animals', async (req, res) => {
  db.any('SELECT * FROM animals')
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post('/animals', async (req, res) => {
  console.log(req)
  // db.any('SELECT * FROM animals')
  //   .then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
