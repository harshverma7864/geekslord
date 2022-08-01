import React from 'react'

import Image from 'next/image'
import style from '../../styles/Nav.module.css'
import Link from 'next/link'

const Navbar = () => {

  return (
    <>
    <section className={style.navigation}>
  <div className={style.navcontainer}>
    <div className={style.brand}>
    <img src="/logo.png" alt="Vercel Logo" width="40" height="40" />  <a href="#!">GeeksLord</a>
    </div>
    <nav className={style.nav}>
      <div className={style.navmobile}><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul className={style.navlist}>
        <li>
         <Link href={'/'} ><a >Home</a></Link>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Contests</a>
          {/* <ul className={style.navbardropdown}>
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href={'/login'}>Login / SignUp</Link>
        </li>
        {/* <li>
          <a href="#!" >Category</a>
          <ul className={style.navbardropdown}>
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li> */}
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
    </>
  )
}

export default Navbar