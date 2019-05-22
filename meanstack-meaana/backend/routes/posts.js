const express = require("express");


const Post = require("../models/post");

const router = express.Router();

router.post("/measure", (req, res, next) => {
  const post = new Post({
    exp:req.body.exp,
    pro:req.body.pro,
    result:req.body.result
  
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: "post created!",
        result:result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: "post not created"
      });
    });
});



router.post("/analyse", (req, res, next) => {
  const post = new Post({
    result:req.body.result,
    data:req.body.data
});
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: "analyse post created!",
        result:result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: "analyse  post not created"
      });
    });
});





module.exports = router;
