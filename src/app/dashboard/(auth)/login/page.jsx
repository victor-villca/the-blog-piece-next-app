'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const LogIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder='email' className={styles.input} required/>
          <input type="password" placeholder='password' className={styles.input} required/>
          <button className={styles.button}>Log in</button>
      </form>
      <button onClick={() => signIn("google")}>Log in with Google</button>  
    </div>
  )
}

export default LogIn