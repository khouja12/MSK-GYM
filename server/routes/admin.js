const express = require("express");
const router = express.Router();
const Admin = require("../Model/Admin");



router.put("/:_id" , async(req , res) => {
    try {
        const {_id} = req.params;
        const resault = await Admin.findByIdAndUpdate({_id} , {$set : {...req.body}})
        res.status(200).send({msg : "Admin Updated!" })
    } catch (error) {
        res.status(400).send({msg : "Admin cannot Update" , error})
    }
  });

module.exports = router;
