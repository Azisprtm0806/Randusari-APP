const { User } = require("../model/User");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../helper/sendMail");

module.exports = {
  forgotPasswordAction: async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).send({ message: "Email Tidak Terdaftar!." });
      } else {
        const token = await jwt.sign(
          {
            iduser: user._id,
          },
          process.env.JWT_KEY
        );

        await User.updateOne({ resetPasswordLink: token });

        const templateEmail = {
          from: "Randusari APP",
          to: email,
          subject: "Link Reset Password : ",
          html: `<p>Silahkan Klik Link di bawah untuk Reset Password Anda</p> <p>${process.env.CLIENT_URL}/reset-password/${token}</p>`,
        };
        sendMail(templateEmail);

        res.status(201).json({
          message: "Silahkan Cek Email Anda, Untuk Link Reset Password!",
        });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal server error!" });
      console.log(error);
    }
  },
};
