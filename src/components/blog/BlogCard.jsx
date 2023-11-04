import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './blogcard.module.css'

const BlogCard = ({post}) => {
  return (
    <div className={styles.blogContainer}>
        <Link href={`/blog/${post._id}`}>
        <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            width={400}
            height={250}
            src={post.image}
            alt={"alt text image"}
            loading="lazy"
            />
        </div>
        </Link> 
        <div className={styles.textContainer}>
        <Link href={`/blog/${post._id}`}>
            <h1 className={styles.title}>{post.title}</h1>
        </Link> 
        <p className={styles.desc}>{post.description}</p>
        </div>            
    </div>
  )
}

export default BlogCard;