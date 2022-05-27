const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async(req, res) => {
    const {type, data} = req.body;
    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        console.log(`Comment created ======: ${status}`);
        await axios.post('http://event-bus-srv:4005/events', {
            type:"commentModerated",
            data:{
                id: data.id,
                status,
                content: data.content,
                postId: data.postId
            }
        });
    }
    res.send({});
    console.log('Event received to moderation service: ', type, data);
})

app.listen(4003, () => {
    console.log('Moderation service is running on port 4003');
});
