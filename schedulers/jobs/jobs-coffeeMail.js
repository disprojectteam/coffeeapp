const sgMail = require('@sendgrid/mail')
// const sendgripAPIKey = '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'
// sgMail.setApiKey(sendgripAPIKey)

class Coffee{
    
    KisiSec (sansliKisiler){
        return sansliKisiler[Math.floor(Math.random()*sansliKisiler.length)]
    }

    async MailYolla(name,to,cclist){
        try {
            await sgMail.send({
                to:to,
                from:'kahveyapp@gmail.com',
                subject:'Deneme maili',
                text:name,
                cc:cclist
            })
        } catch (error) {
            console.log(error)
        }
    }
}

var obj = new Coffee()
module.exports = {obj}