const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
  title : String,
  description : String,
  start_date : Date,
  end_date : Date,
  done : Boolean
})

module.exports = mongoose.model("task", TaskSchema)
