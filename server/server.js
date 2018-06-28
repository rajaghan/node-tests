const express = require('express');

app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found'
  });
});

app.get('/users', (req, res) => {
  res.send([{
      name: 'Raj',
      age: 38
    },
    {
      name: 'Ghanta',
      age: 40
    }
  ]);
});
app.listen(3000);

module.exports.app = app;
