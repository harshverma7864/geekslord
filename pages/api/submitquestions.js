import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    if (req.method == 'POST') {

        let u = await User.findById(req.body._id)
        let x  = u.questions.push(req.body.questions)
        u.save() 
        res.status(200).json({ success : "success"})
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)
