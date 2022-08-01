

import Contests from "../../models/Contests"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    if (req.method == 'POST') {

        let c = await Contests.findById(req.body._id)
        c.contestQuestions.push(req.body.contestQuestions)
        c.save() 
        res.status(200).json({ success : "success"})
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)
