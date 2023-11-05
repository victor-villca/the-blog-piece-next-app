'use client'
import {useState, useEffect} from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()
  const session= useSession()
  console.log(session)

  if(session.status === "loading"){
    return <p>Loading Authentication from Server</p>
  }
  else{
    if(session.status === "unauthenticated"){
      alert("Please login to access dashboard")
      router?.push("/dashboard/login")
    }
    else{
      if(session.status === "authenticated"){
        return (
          <div className={styles.container}>Dashboard</div>
        )
      }
    }
  }
  
  }


export default Dashboard