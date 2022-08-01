import Questions from "../../models/Questions"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    let questions = await Questions.find();
    res.status(200).json({questions})
}

export default connectDb(handler)
  