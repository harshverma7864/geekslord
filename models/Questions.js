const mongoose = require('mongoose')



const questionSchema = new mongoose.Schema({
    qname : {type : String , required :true , unique : true},
    statement : {type : String , required :true , unique : true},
    points : {type : String , required :true},
    category : {type : String , required :true},
    level : {type : String , required :true},
    pdate : {type: String , required : true },
    constraints : [],
    explanation : [],
} , {timestamps:true});

mongoose.models = {}
export default mongoose.model("Questions", questionSchema);

