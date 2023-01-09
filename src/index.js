const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

//const { sendBasicEmail } = require('./services/email-service');

app.use(express.json());



const setupAndStartServer = () => {
    app.listen(PORT, ()=> {
        console.log(`Server listening at port ${PORT}`);

        // sendBasicEmail(
        //     'businessservice0206@gmail.com',
        //     'akumarroy86@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you ?'
        // )
    })
}

setupAndStartServer();