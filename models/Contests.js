const mongoose = require('mongoose')

const contestSchema = new mongoose.Schema({
    contestName : {type : String , required :true , unique : true},
    contestDuration : {type : String , required :true},
    category : {type : String , required :true},
    contestPoints : {type : Number , required :true},
    contestQuestions : []
} , {timestamps:true});

mongoose.models = {}
export default mongoose.model("Contests", contestSchema);

