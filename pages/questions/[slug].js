import React from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Questions from "../../models/Questions"
import style from '../../styles/slug1.module.css'
import Navbar from '../components/Navbar'

const Post = ({questions}) => {
    // console.log(questions)
    const router = useRouter();
    // console.log(router.query);
    const { slug } = router.query;

return (
  <>
  <Navbar />

<div className={style.full}>

  <div className={style.left}>
  {
    questions.map((item)=>{
      var explanation = item.explanation
      var constraints = item.constraints

      return(
        <div  key={item._id}>
        <div className= {`${style.statement} shadow-sm`}>

          <h2 className={`${style.heading} `}> <b> Title :</b>  {item.qname}   </h2>
        </div>
           <div className={`${style.main}`}>
            <div className= {`${style.statement} shadow-sm`}>
              <h3 className={`${style.heading}`}>Statement</h3>
              <div>{item.statement}</div>
            </div>
            <div className= {`${style.example} shadow-sm`}>
              <h3 className={`${style.heading}`}>Explanation</h3>

              {
                item.explanation.map((item2)=>{
                  return (
                    <div key={item2.number}>
                   <span className='mx-4 my-4'> <b>Example : {item2.number} </b></span>
                   <p className='mx-4 my-4'> <b>Input :</b> {item2.Input}</p>
                   <p className='mx-4 my-4'> <b>Ouput :</b> {item2.Output}</p>
                  <p className='mx-4 my-4'> <b>Explanation :</b> {item2.Explanation}</p>
                  </div>
                  )
                })

              }
            </div>
            <div className= {`${style.constraints} shadow-sm`}>
              <h3 className={`${style.heading}`}>Constraints</h3>
              <ul>
                {
                  item.constraints.map((item3)=>{
                    return (
                    <li key={item3.c} >{item3.c}</li>
                    )
                  })

                }
              </ul>
            </div>
          </div>
        </div>
      )
    })
  }


</div>

<div className={style.right}>
  <form action="">
    <select >
      <option value="c++">C++</option>
      <option value="Python">Python</option>
      <option value="c">C</option>
      <option value="Java">Java</option>
    </select><br />
    <textarea rows="40">// Your code here</textarea>
    <button type='submit' style={{width: "100%"}} className='my-3 btn btn-success'>Submit</button>
  </form>
</div>
 </div>
  
  
  </>
)
 
}



export async function getServerSideProps(context) {


  if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
  }
  // Fetch data from external API
  // let dt = item.createdAt.substr(0,10);
  let questions = await Questions.find({_id : context.query.slug});

  console.log(questions)

  // Pass data to the page via props
  return { props: {questions : JSON.parse(JSON.stringify(questions))}}
}








export default Post