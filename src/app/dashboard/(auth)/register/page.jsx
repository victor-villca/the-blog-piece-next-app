'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error, seterror] = useState(false)
  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res=await  fetch("/api/auth/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json",},
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      console.log(res.status === 201)
      res.status === 201 && router.push("/dashboard/login?success=Account created correctly");   
     }catch (error) {
        seterror(true)
    }

  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Welcome to The Blog Piece! Let&apos;s Get Started</h1>
        <input type="text" placeholder='Username' className={styles.input} required/>
        <input type="email" placeholder='Email' className={styles.input} required/>
        <input type="password" placeholder='Password' className={styles.input} required/>
        <button className={styles.button}>Create Account</button>
      </form>
      {error && "ERROR MESSAGE"}
      <Link href={"/dashboard/login"}>Log in with a different account</Link>
    </div>
  )
}

export default Register