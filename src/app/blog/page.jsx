import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href={"/blog/blogId"} className={styles.blogContainer}>
        <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            fill={true}
            src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt='image'
            />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={"/blog/blogId"} className={styles.blogContainer}>
        <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            fill={true}
            src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt='image'
            />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={"/blog/blogId"} className={styles.blogContainer}>
        <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            fill={true}
            src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt='image'
            />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={"/blog/blogId"} className={styles.blogContainer}>
        <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            fill={true}
            src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt='image'
            />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
        </div>
      </Link>      
    </div>
  )
}

export default Blog