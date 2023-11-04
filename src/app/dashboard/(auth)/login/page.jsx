'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const LogIn = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>Log in with Google</button>
    </div>
  )
}

export default LogIn