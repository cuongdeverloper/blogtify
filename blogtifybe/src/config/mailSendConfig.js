const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:process.env.MAIL_BLOGTIFY_USERNAME,
            pass:process.env.MAIL_BLOGTIFY_PASSWORD
        }
    }
)
 const sendMail = (to,sub,msg) =>{
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    })
    console.log('emailsent')
};
module.exports ={sendMail}
