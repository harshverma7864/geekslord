import React from 'react'
import auth from '../styles/auth.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Typing from './components/Typing'
import Link from 'next/link'
const Signup = () => {
  return (
    <>
    <div className={auth.main}>
       <div className={auth.left}><img src="/signup2.webp" alt="" /></div>
       <div className={`${auth.right} `}>
<div className={auth.type}>
<Typing/>
</div>

           <div className={`${auth.login} py-4 px-4 shadow`}>
           <div className={`${auth.section} `}>
           <Link href={'/login'}><div className={`${auth.log} `}>Login</div></Link>
             <div className={`${auth.sign} shadow`}>SignUp</div>
           </div>
           <form className='shadow py-4 px-4'>
               <div className='row '>
           <div className="col-md-6">
               <div class="mb-6">
                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div></div>
            <div className="col-md-6">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">College Roll Number</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Course / Branch</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>
           
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">College Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Language You are familiar with</label>
                    <select name="" id="" className='form-select'>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Profile photo</label>
                    <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"/>
                    </div>
                </div>
            </div>
            </div>
            <button type="submit" className={`${auth.btn}`}>SignUp</button>
            </form>
           </div>
       </div>
   </div>
    
    </>
  )
}

export default Signup