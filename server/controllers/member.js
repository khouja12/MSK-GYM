const Member = require("../Model/Member");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const foundMember = await Member.findOne({ email });
    if (foundMember) {
      return res.status(400).send({ error: [{ msg: "email arledy used " }] });
    }

    const saltRounds = 10;
    const hachedPassword = await bcrypt.hash(password, saltRounds);

    const newMember = new Member({ ...req.body, password: hachedPassword });
    await newMember.save();

    const token = jwt.sign(
      {
        id: newMember._id,
      },
      process.env.SCRT_KEY,
      { expiresIn: "48h" }
    );

    res
      .status(200)
      .send({ succes: [{ msg: "register Done " }], Member: newMember, token });
  } catch (error) {
    res.status(400).send({ error: [{ msg: "cannot Register " }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundMember = await Member.findOne({ email:email });
    if (!foundMember)
      return res
        .status(400)
        .send({ errors: [{ msg: "cannot found member " }] });
    const checkedPassword = await bcrypt.compare(
      password,
      foundMember.password
    );
    if (!checkedPassword) {
      return res
        .status(400)
        .send({ errors: [{ msg: "please check your password " }] });
    }
    const token = jwt.sign(
      {
        id: foundMember._id,
      },
      process.env.SCRT_KEY,
      { expiresIn: "48h" }
    );
    res
      .status(200)
      .send({ succes: [{ msg: "welcomeBack" }], Member: foundMember , token  });
  } catch (error) {
    res.status(400).send({ error: [{ msg: "cannot login " }] });
  }
};
