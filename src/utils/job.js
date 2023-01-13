const cron = require('node-cron');
const emailService = require('../services/email-service');



const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fetchpendingEmails();
        response.forEach((email)=>{
            emailService.sendBasicEmail(
                "ReminderService@airline.com",
                email.recepientEmail,
                email.subject,
                email.content
                )
        })
        console.log(response);
    })
}

module.exports = setupJobs;