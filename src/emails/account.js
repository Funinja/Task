const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'dennis.lamerice@gmail.com',
//     from: 'dennis.lamerice@gmail.com',
//     subject: 'This is my first email',
//     text: 'I hope it gets there.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dennis.lamerice@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}`
    })
}

const cancelEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'dennis.lamerice@gmail.com',
        subject: 'Jerk',
        text: `Why'd you leave, ${name}?`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelEmail
}