const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

app.use(express.json());

const setupAndStartServer = () => {
    app.listen(PORT, ()=> {
        console.log(`Server listening at port ${PORT}`);
    })
}

setupAndStartServer();