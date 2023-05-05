const member = require("../Model/Member");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).send({ errors: [{ msg: "not Authorization 1" }] });
    }
    const decoded = jwt.verify(token, process.env.SCRT_KEY);
    const foundMember = await member.findOne({ _id: decoded.id });
    if (!foundMember) {
      return res.status(400).send({ errors: [{ msg: "not Authorization 2" }] });
    }
    req.member = foundMember;

    next();
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "not Authorization 3" }] });
  }
};

module.exports = isAuth;
