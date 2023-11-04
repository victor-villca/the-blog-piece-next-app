'use client'
import {useState, useEffect} from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const session= useSession()
  console.log(session)
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  // console.log(data)

/*
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () =>{
      setLoading(true)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts",
      {cache: 'no-store'})
      if(!res.ok){
        setError(true)
        throw new Error("Something went wrong")
      }
      const data = await res.json()

      setData(data)
      setLoading(false)
    }
    getData()
  }, [])

  console.log(data)*/