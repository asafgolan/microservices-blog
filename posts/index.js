const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {}

app.post('/posts/create', async(req, res) => {
  const id = randomBytes(4).toString('hex');
  console.log(req.body);
  const title = req.body.title;
  posts[id] = {
    id,
    title,
  };
  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title,
    }
  })
  res.send({id, title});
});

app.post('/events', (req, res) => {
  console.log("recived event from bus", req.body.type);
  res.send({msg: "recived event from bus" + req.body.type});
});

app.listen(4000, () => {
  console.log('v51');
  console.log('Post service is running on port 4000');
});
