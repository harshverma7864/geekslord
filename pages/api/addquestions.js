import Questions from "../../models/Questions"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let q = new Questions({
                qname : req.body[i].qname,
                statement: req.body[i].statement,
                points: req.body[i].points,
                category: req.body[i].category,
                level : req.body[i].level,
                pdate : today ,
                explanation : req.body[i].explanation,
                constraints : req.body[i].constraints
            })
            await q.save()
        }
        res.status(200).json({ success : "success"})
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)
