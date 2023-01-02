const { User, validateResetPass } = require("../model/User");
const bcrypt = require("bcrypt");

module.exports = {
  actionResetPassword: async (req, res) => {
    const { email, password } = req.body;

    try {
      const { error } = validateResetPass(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const user = await User.findOne({ email: email });
      if (user) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        user.password = hashPassword;
        await user.save();

        res.status(200).json({ message: "Password berhasil diubah!" });
      } else {
        res.status(401).json({ message: "Email tidak terdaftar!" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal server error!" });
    }
  },
};
