const express = require('express')
var dotenv = require('dotenv')
const router = express.Router()
const path = require('path')
const jobs_coffeemail = require('../../schedulers/jobs/jobs-coffeeMail')
const scheduler_coffeeMail = require('../../schedulers/scheduler-coffeeMail')
var status = 'on'
const sgMail = require('@sendgrid/mail')
const sendgripAPIKey = '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'
sgMail.setApiKey(sendgripAPIKey)

router.get('/luckyperson/on',async(req,res) => {
    try {
        // eğer kapatılmışsa aç ve mail yolla
        if(status === 'off'){
            status = 'on'
            scheduler_coffeeMail.cronMethod.start()
            // scheduler_coffeeMail.cronmethod2.start()
            res.send('ON')
        } else{
            res.send('ALREADY ON')
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/luckyperson/off', async(req,res) => {
    try {
        if(status === 'on'){
            status = 'off'
            scheduler_coffeeMail.cronMethod.stop()
            // scheduler_coffeeMail.cronmethod2.stop()
            res.send('OFF')
        } else{
            res.send('ALREADY OFF')
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router