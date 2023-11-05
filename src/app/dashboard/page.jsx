'use client'
import {useState, useEffect} from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'

const Dashboard = () => {
  const router = useRouter()
  const session= useSession()
  console.log(session)

  const fetcher = (...args) => fetch(...args).then((res)=>res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  )
  console.log(data)
  
  const handleDelete= async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const description = e.target[1].value
    const image = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          author: session.data.user.name,
        }),
      })
      mutate()
      e.target.reset()
    } catch (error) {
      throw new Error(error.message)
    }
  }

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
          <div className={styles.container}>
            <div className={styles.posts}>
              { isLoading ? "loading" : data.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image 
                      src={post.image}
                      alt='post image'
                      width={200}
                      height={100}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.postContentContainer}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <span onClick={() => handleDelete(post._id)} className={styles.delete}>X</span>
                  </div>
                </div>
              ))}
            </div>
            <form className={styles.postForm} onSubmit={handleSubmit} >
                <h1>Add a new post</h1>
                <input type="text" className={styles.input} placeholder='Title' required/>
                <input type="text" className={styles.input} placeholder='Description' required/>
                <input type="text" className={styles.input} placeholder='Image link' required/>
                <textarea placeholder='Enter your content' cols="30" rows="10" className={styles.textArea}></textarea>
                <button className={styles.button}>Create post</button>
            </form>

          </div>
        )
      }
    }
  }
  
}


export default Dashboard