const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    roll : {type : String , required : true, unique : true},
    branch : String,
    email : {type : String , required : true},
    plang : String,
    questions : {type : [] , default : []},
    contests : {type : [] , default : []}

} , {timestamps:true});

mongoose.models = {}
export default mongoose.model("User", userSchema);

