'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
const navLinks = [
    {
        id : 1,
        direction: "/",
        name : "home",
    },
    {
        id : 2,
        direction: "/about",
        name : "about",
    },
    {
        id : 3,
        direction: "/blog",
        name : "blog",
    },
    {
        id : 4,
        direction: "/contact",
        name : "contact",
    },
    {
        id : 5,
        direction: "/dashboard",
        name : "dashboard",
    },
    {
        id : 6,
        direction: "/portafolio",
        name : "portafolio",
    },
]
const Navbar = () => {
  return (
        <div className={styles.container}>
            <Link href={"/"} className={styles.logo}> aaa </Link>
            <div className={styles.links}>
                {navLinks.map((link) =>(
                        <Link key={link.id} href={link.direction} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                <button className={styles.logout} onClick={()=>(console.log("logging out"))}>Log out</button>
            </div>
        </div>
        
  )
}

export default Navbar;