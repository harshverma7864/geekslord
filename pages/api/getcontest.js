import Contests from "../../models/Contests"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    let contest = await Contests.find();
    res.status(200).json({contest})
}

export default connectDb(handler)
  