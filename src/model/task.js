const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  Codigo: Number,
  Nombre:String,
  Apellido:String,
  Edad:Number,
});

module.exports = mongoose.model('tasks', TaskSchema);
