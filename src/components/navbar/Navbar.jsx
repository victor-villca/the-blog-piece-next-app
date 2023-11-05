'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import navLinks from '@/utils/navLinks'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession();
  return (
        <div className={styles.container}>
            <Link href={"/"} className={styles.logo}>
                <Image 
                    src={"/logo.png"}
                    alt='logo'
                    width={250}
                    height={90}
                    className={styles.img}
                />
            </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {navLinks.map((link) =>(
                        <Link key={link.id} href={link.direction} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}

                    {session.status === "authenticated" ? (
                      <button className={styles.logout} onClick={signOut}>Log out</button>
                    ):(
                      <>
                        <Link href={"/dashboard/login"} className={styles.login}>Log in</Link>
                        <Link href={"/dashboard/register"} className={styles.login}>Sign up</Link>
                      </>
                      
                    )}              
            </div>
            
        </div>
        
  )
}

export default Navbar;