const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

//const { sendBasicEmail } = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller');

app.use(express.json());

const jobs = require('./utils/job');

const setupAndStartServer = () => {

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, ()=> {
        console.log(`Server listening at port ${PORT}`);
        jobs();

        // sendBasicEmail(
        //     'businessservice0206@gmail.com',
        //     'akumarroy86@gmail.com',
        //     'Backend_Developer-Round 1',
        //     'Hi Amit, inviting you for a technical round interview at 2:00 pm. Please confirm your availabiliy. Here is the link to join the meeting https://meet.google.com/bki-brha-mkm'
        // )
    })
}

setupAndStartServer();