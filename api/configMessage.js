const nodemailer = require('nodemailer');

module.exports = async (form) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'eloy24@ethereal.email',
      pass: 'yM6ABm9mDHYT9Xrz5w'
    },
    tls: {
      // if the host does not have a valid certificate you can
      // allow it in the transport settings with tls.rejectUnauthorized option
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `”${form.name} 👻” <${form.email}>`,
    to: 'thalesaleite@gmail.com',
    subject: form.subject,
    html: `
        <strong>Nome:</strong> ${form.name} <br/>
        <strong>E-mail:</strong> ${form.email} <br/>
        <strong>Mensagem:</strong> ${form.message}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
}
