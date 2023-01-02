const nodemailer = require("nodemailer");

exports.sendMail = (dataEmail) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "azisprtm2@gmail.com",
      pass: "agqy pjbf vghx huse",
    },
  });
  return transporter.sendMail(dataEmail);
};
