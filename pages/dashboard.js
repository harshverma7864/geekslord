import React from 'react'
import dcss from '../styles/dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Dashboard = () => {
  return (
    <>
      <div className={dcss.topheader}>
         <div className={`${dcss.skillbox} bg-danger`}>wd</div>
         <div className={`${dcss.skillbox} bg-warning`}>sd</div>
         <div className={`${dcss.skillbox} bg-success`}>sdsd</div>
         <div className={`${dcss.skillbox} bg-primary`}>sd</div>
      </div>
      <div className={`${dcss.main} shadow-lg`}>
        <div className={`${dcss.mainheader} `}>
          <div className={`${dcss.image} rounded-circle shadow`}> <img className='rounded-circle' src="/user.jpg" alt="" /> </div>
          <div className={`${dcss.details} `}>
            <p className={`${dcss.name} `}><h1> Harsh Verma </h1></p>
            <p className={`${dcss.college} `}>Axis Institute of Technology and Management / B Tech (CSE)</p>
            <p className={`${dcss.points} `}>Points</p>
          </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard