'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import navLinks from '@/utils/navLinks'

const Navbar = () => {
  return (
        <div className={styles.container}>
            <Link href={"/"} className={styles.logo}> aaa </Link>
            <div className={styles.links}>
                <DarkModeToggle />
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