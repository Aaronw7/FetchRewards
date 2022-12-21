const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/postForm', (req, res) => {
  const Url = 'https://frontend-take-home.fetchrewards.com/form';
  axios({
    method: 'post',
    url: Url,
    data: req.body
  })
  .then(result => res.sendStatus(201))
  .catch(err => res.send(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})