const sgMail = require("@sendgrid/mail");

const sendEmail = (emailTo, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: emailTo,
    from: "maryssecretsanta46@gmail.com",
    subject: "Secret Santa",
    text: "You are the Secret Santa for " + name + "!",
    // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmail };
