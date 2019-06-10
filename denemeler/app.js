const cron = require('node-cron')
const MailYolla = require('./MailYolla')
const KisiSec = require('./KisiSec')

Kisiler = ['Taygun Karpuzoglu','Melih Topraksever','Serif Bekar','Gokce Guneri']
KisilerDict = {'Taygun Karpuzoglu':'taygun.karpuzoglu@loft.com.tr','Melih Topraksever':'melih.topraksever@colins.com.tr',
'Serif Bekar':'serif.bekar@colins.com.tr','Gokce Guneri':'gokce.guneri@colins.com.tr'}

cron.schedule('30 09 * * *' , () => {
    var sansliKisi = KisiSec(Kisiler)
    list = Kisiler.filter(item => item !== sansliKisi)
    var sansliKisi2 = KisiSec(list)
    cclist = []
    list.forEach(element => {
        cclist.push(KisilerDict[element])
    });
    console.log(sansliKisi,sansliKisi2)
    MailYolla(sansliKisi + " " + sansliKisi2,KisilerDict[sansliKisi],cclist)   
})


// var sansliKisi = KisiSec(Kisiler)
// list = Kisiler.filter(item => item !== sansliKisi)
// var sansliKisi2 = KisiSec(list)
// cclist = []
// list.forEach(element => {
//     cclist.push(KisilerDict[element])
// });
// console.log(sansliKisi,sansliKisi2)