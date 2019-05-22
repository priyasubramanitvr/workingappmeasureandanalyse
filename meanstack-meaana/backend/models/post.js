const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const postSchema = mongoose.Schema({

  exp:{type:Number},
  pro:{type:Number},
  result:{type:Number},
  result:{type:Number},
  data:{type:String}


});

postSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Post", postSchema);
