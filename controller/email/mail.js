const mailer = require("nodemailer");
const cron = require('node-cron')
const { Hello } = require("./hello_temp");
const { Thanks } = require("./thankyou_tepm");
const { External } = require("./external_temp");

const getEmailData = (to, template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "Eeswar",
                to,
                subject: `Asset Pro Maintenance Remainder`,
                html: Hello()
            }
            break;

        case "thanks":
            data = {
                from: "John Ahn <jaewon@gmail.com>",
                to,
                subject: `Hello`,
                html: Thanks()
            }
            break;

        case "externalworkorder":
            data = {
                from: "AssetPro Maintenance Team",
                to,
                subject: `Asset Pro Maintenance`,
                html: External()
            }
            break;

        default:
            data;
    }
    return data;
}


const sendEmail = (to, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        port: 465,
        logger: true,
        debug: true,
        auth: {
            user: "shavineeswar@gmail.com",
            pass: "St.anthonys3"
        }
    })

    const mail = getEmailData(to, type)

    // cron.schedule('* * * */6 *', () => {
    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log(" email sent successfully")
        }
        smtpTransport.close();
    });

    // })


}

module.exports = { sendEmail }