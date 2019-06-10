const coffeeMail = require('./jobs/jobs-coffeeMail')
const cron = require('node-cron')

const sgMail = require('@sendgrid/mail')
const sendgripAPIKey = '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'
sgMail.setApiKey(sendgripAPIKey)

Kisiler = ['Taygun Karpuzoglu','Melih Topraksever','Serif Bekar','Gokce Guneri']

KisilerDict = {'Taygun Karpuzoglu':'taygun.karpuzoglu@loft.com.tr','Melih Topraksever':'melih.topraksever@colins.com.tr',
'Serif Bekar':'serif.bekar@colins.com.tr','Gokce Guneri':'gokce.guneri@colins.com.tr'}


const cronMethod = cron.schedule('00 06 * * *' , () => {

    var sansliKisi = coffeeMail.obj.KisiSec(Kisiler)
    list = Kisiler.filter(item => item !== sansliKisi)
    var sansliKisi2 = coffeeMail.obj.KisiSec(list)
    cclist = []
    list.forEach(element => {
        cclist.push(KisilerDict[element])
    });
    cclist.push('kaankarakoc09@gmail.com')
    console.log(sansliKisi,sansliKisi2)
    coffeeMail.obj.MailYolla(sansliKisi + " " + sansliKisi2,KisilerDict[sansliKisi],cclist).then(() =>  console.log('Gönderildi')) 
})
module.exports = {cronMethod}