'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {FcGoogle} from 'react-icons/fc'

const LogIn = () => {
  const session = useSession()
  const router = useRouter()
  if(session.status === "loading"){
    return <p>Loading Authentication from Server</p>
  }

  if(session.status === "authenticated"){
      router.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back! Log in to Your Account</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' className={styles.input} required/>
          <input type="password" placeholder='Password' className={styles.input} required/>
          <button className={styles.button}>Log in</button>
        </form>
        <p className={styles.txtOr}>-- OR --</p>
      <div class={styles.googleBtn} onClick={() => signIn("google")}>
        <div class={styles.iconWrapper}>
          <FcGoogle
            className={styles.icon}
            size={"2rem"}
           />
        </div>
        <p class={styles.googleTxt}><b>Log in with google</b></p>
      </div>
    </div>
  )
}

export default LogIn