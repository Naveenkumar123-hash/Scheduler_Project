const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let events = [];

const corsOptions = {
    origin: 'https://scheduler-project.vercel.app', 
    methods: ['GET', 'POST'],
    credentials: true, 
};

app.use(cors(corsOptions));


app.post('/add-event', (req, res) => {
    const { start_time, end_time } = req.body;

    if (start_time < 0 || end_time > 23 || start_time >= end_time) {
        return res.status(400).send('Invalid event times');
    }

    for (let event of events) {
        if (start_time < event.end_time && end_time > event.start_time) {
            return res.status(409).send('Event overlaps with existing events');
        }
    }

    events.push({ start_time, end_time });
    res.status(201).send({ start_time, end_time });
});

app.get('/',(req,res)=>{
    res.send({message:'baseroute',status:200})
})

app.get('/events', (req, res) => {
    res.json(events);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
