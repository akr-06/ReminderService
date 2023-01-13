const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();
const sendBasicEmail =  async (mailFrom, mailTo, mailSubject, mailBody) => {
    
    try {
        sender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        })
    } catch (error) {
        console.log(error);
    }
   
}

const fetchpendingEmails = async (timestamp) => {
    try {
        
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createNotification = async (data)=> {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    sendBasicEmail,
    fetchpendingEmails,
    createNotification
}