const express = require("express");
const router = express.Router();
const coach = require ("../Model/Coach")
const bcrypt = require ('bcrypt');
const Coach = require("../Model/Coach");


router.get("/test", (req, res) => {
  res.send("hellogdf");
});


router.post("/add" , async(req , res) => {
    try {
        const {name , email , phone} = req.body 
        const newCoach = new Coach ({name , email , phone})
        await newCoach.save()
        res.status(200).send({msg : "Coach Object Has been Added" , newCoach})
    } catch (error) {
        res.status(400).send({msg : "cannot be added " , error})
    }
})

router.get("/all/coach", async (req, res) => {
  try {
    const coachsList = await Coach.find();
    res.status(200).send({ msg: "coach List", coachsList });
  } catch (error) {
    res.status(400).send({ msg: "cannot get all coach ", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const resault = await Coach.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Coach Updated!" });
  } catch (error) {
    res.status(400).send({ msg: "coach cannot Update", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const coach = await Coach.findById({ _id });
    res.status(200).send({ msg: "This coach", coach });
  } catch (error) {
    res.status(400).send({ msg: "cannot find Coach", error });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Coach.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Coach Deleted" });
  } catch (error) {
    res.status(400).send({ msg: "Coach Delete coach", error });
  }
});

module.exports = router;
