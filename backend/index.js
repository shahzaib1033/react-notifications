import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pushNotifications from './notifications/firebase.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('default'));
app.use(bodyParser.json())


app.get('/', function (req, res) { 
    res.send(' welcome to the world! of coding!');
})

app.post('/notify', function (req, res) {
   
const {message,title,deviceToken}=req.body;

    pushNotifications(deviceToken, title, message);
    res.send('Notification sent successfully');
});



app.listen(3030, () => {
    console.log('listening on http://localhost:3030');
})