const router = require("express").Router();
const User = require("../models/User");
const Create = require("../models/Create");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });

        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    } }
else {
        res.status(401).json("Update only your account");
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try{
            const user = await User.findById(req.params.id);
        
    try {
        await Create.deleteMany({username:user.username});
        await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    }  
    catch (err) {
        res.status(500).json(err);
    }
  } catch (err) {
    res.status(401).json("user not found")
  } }
else {
        res.status(401).json("Delete only your account");
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;