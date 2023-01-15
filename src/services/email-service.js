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

const updateTicket = async(ticketId, data) => {
    try {
        const response = await repo.update(ticketId,data);
        return response;
    } catch (error) {
        console.log(error);
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

const subscribeEvents = async (payload) => {

    let service = payload.service;
    let data = payload.data;

    switch(service){
        case 'CREATE_NOTIFICATION':
            await this.createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await this.sendBasicEmail(data);
            break;
        default:
            console.log("No valid event received");
            break;

    }
    console.log("Inside Service layer", data);
}


module.exports = {
    sendBasicEmail,
    fetchpendingEmails,
    createNotification,
    updateTicket,
    
}