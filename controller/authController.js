const { User } = require("../model/User");
const bcrypt = require("bcrypt");
const { validate } = require("../middleware/validate");

module.exports = {
  authUser: async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(401).send({ message: "Invalid email or password!" });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(401).send({ message: "Invalid email or password!" });

      const token = user.generateAuthToken();
      res.status(200).send({ data: token, message: "Logged in successfuly!" });
    } catch (error) {
      res.status(500).send({ message: "Internal server error!" });
      console.log(error);
    }
  },
};
