const router = require("express").Router();
const User = require("../models/User");
const Create = require("../models/Create");


//CREATE
router.post("/", async (req, res) => {
   const newCreate = new Create(req.body);
   try{
       const savedCreate = await newCreate.save();
       res.status(200).json(savedCreate);
   }
   catch(err) {
    res.status(500).json(err)
   }
});
//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const create =  await Create.findById(req.params.id);
        if (create.username === req.body.username) {
            try {
                const updatedCreate = await Create.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
             res.status(200).json(updatedCreate);    
              }
              catch (err) {
                res.status(500).json(err);
              }
        } else{
            res.status(401).json("Update only what you create");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const create = await Create.findById(req.params.id);
        if (create.username === req.body.username) {
            try{
                await create.delete()
                res.status(200).json("deleted");
            }
            catch (err) {
                res.status(500).json(err);
            }
        }else {
            res.status(401).json("Delete only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET 
router.get("/:id", async (req, res) => {
    try {
        const create = await Create.findById(req.params.id);
        
        res.status(200).json(create);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;