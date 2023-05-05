const express = require("express");
const router = express.Router();
const Member = require("../Model/Member");
const { register, login } = require("../controllers/member");
const {
  registerValidator,
  loginValidator,
  validation,
} = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");

router.get("/test", (req, res) => {
  res.send("hellogdf");
});

router.post("/register", registerValidator(), validation, register);

router.post("/login", loginValidator(), validation, login);
router.get("/current", isAuth, (req, res) => {
  res.send(req.member);
});

router.get("/all/member", async (req, res) => {
  try {
    const listMembers = await Member.find();
    res.status(200).send({ msg: "member List", listMembers });
  } catch (error) {
    res.status(400).send({ msg: "cannot get all member ", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const resault = await Member.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Member Updated!" });
  } catch (error) {
    res.status(400).send({ msg: "Member cannot Update", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const member = await Member.findById({ _id });
    res.status(200).send({ msg: "This member", member });
  } catch (error) {
    res.status(400).send({ msg: "cannot find Member", error });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Member.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Member Deleted" });
  } catch (error) {
    res.status(400).send({ msg: "Cannot Delete Member", error });
  }
});

module.exports = router;
