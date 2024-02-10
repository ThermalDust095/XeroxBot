const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
require('dotenv').config()


const Whatsapp = new WhatsappCloudAPI({
    accessToken: process.env.ACCESS_TOKEN,
    senderPhoneNumberId: process.env.PHONE_NUMBER_ID,
    WABA_ID: process.env.BUSINESS_ACC_ID,
});

async function sendMessage(){
    await Whatsapp.sendText({
        message: 'Hello world!!',
        recipientPhone: '+917338270444',
    });
}


main().then(res => console.log(res)).catch(err => console.log(err))