const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Post = require("../models/post");

const router = express.Router();

router.post("/", (req, res, next) => {
    const post = new Post({
      definition:req.body.definition,
      startingdate:req.body.startingdate,
      enddate:req.body.enddate
    
    });
    post
      .save()
      .then(result => {
        res.status(201).json({
          message: "post created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: "post not created"
        });
      });
  });






module.exports = router;
