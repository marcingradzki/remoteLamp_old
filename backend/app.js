const app = require('express')();
const schedule = require('node-schedule');
const bodyParser = require('body-parser');
const lampTrigger = require('./lampTrigger');
const port = 3000;
let _trigger,
    _scheduler,
    _automaticTurnOn = false;

const setScheduler = (date = '15 * * *') => {
    return schedule.scheduleJob(date, async () => {
        _trigger = _automaticTurnOn && await lampTrigger.setSunsetTrigger();
    })
};

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/auto/on', async (req, res) => {
    _trigger = await lampTrigger.setSunsetTrigger();
    _automaticTurnOn = true;
    res.statusCode(200);
});

app.get('/auto/off', (req, res) => {
    lampTrigger.kill(_trigger);
    _automaticTurnOn = false;
    res.statusCode(200);
});

app.post('/auto', async (req, res) => {
    const { date } = req.body;
    _trigger = await lampTrigger.setCustomTrigger(date);
    res.send(date);
});

app.get('/', (req, res) => {
    res.statusCode(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    _scheduler = setScheduler();
});