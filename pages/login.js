import React from 'react'
import auth from '../styles/auth.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Typing from './components/Typing'
import Link from 'next/link'
const Login = () => {
  return (
    <>
    <div className={auth.main}>
       <div className={auth.left}><img src="/login.png" alt="" /></div>
       <div className={`${auth.right} `}>
<div className={auth.type}>
<Typing/>
</div>

           <div className={`${auth.login} py-4 px-4 shadow`}>
           <div className={`${auth.section}`}>
             <div className={`${auth.log} shadow`}>Login</div>
             <Link href={'/signup'}><div className={auth.sign}>SignUp</div></Link>
           </div>
           <form className='shadow py-4 px-4'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Roll Number or college mail</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
           
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className={`${auth.btn}`}>Login</button>
            </form>
           </div>
       </div>
   </div>
    
    </>
  )
}

export default Login