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

app.get('/notify', async (req, res)=> {
    const token = "fpvYkMP6_TT2cws-lUZV4a:APA91bEFN1icjv4EuZ5G0j7CR9TzID09WegCrpnF78Vw_xu2lj6vCmMHHVPvTUuJjWP4s5nrLTkvh_MKdUNTCriQ5xG4fHDzJMa6CtTirt-TV_ZNNS2isfPUeN1f05_UbH4aOAxvbo4F"
const {message="sdfs",title="sdf",deviceToken =token}=req.query;

   await pushNotifications(deviceToken, title, message);
    res.send('Notification sent successfully');
});



app.listen(3030, () => {
    console.log('listening on http://localhost:3030');
})