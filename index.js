const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server run on port 3000');
});
