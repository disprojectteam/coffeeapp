const sgMail = require('@sendgrid/mail')
const sendgripAPIKey = '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'
sgMail.setApiKey(sendgripAPIKey)

const MailYolla = async (name, to, cclist) => {
    try {
        await sgMail.send({
            to: to,
            from: 'kahveyapp@gmail.com',
            subject: 'Kahve yapacak şanslı insan',
            text: name,
            cc: cclist
        })
    } catch (error) {
        console.log(error)
    }

}


module.exports = MailYolla
