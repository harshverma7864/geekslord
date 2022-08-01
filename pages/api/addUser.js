import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let u = new User({
                fname: req.body[i].fname,
                lname: req.body[i].lname,
                roll: req.body[i].roll,
                email: req.body[i].email,
                branch: req.body[i].branch,
                plang: req.body[i].plang,
                questions: [],
                contests: []
            })
            await u.save()
        }
        res.status(200).json({ success : "success"})
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)
