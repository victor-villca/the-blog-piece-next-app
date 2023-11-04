import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './blogcard.module.css'

const BlogCard = ({photo, index, posts}) => {
  return (
    <div className={styles.blogContainer}>
        <Link href={`/blog/blog-${index+1}-${photo.id}`}>
        <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            width={400}
            height={250}
            src={photo.src.large}
            alt={photo.alt}
            loading="lazy"
            />
        </div>
        </Link> 
        <div className={styles.textContainer}>
        <Link href={`/blog/blog-${index+1}-${photo.id}`}>
            <h1 className={styles.title}>{posts[index]?.title}</h1>
        </Link> 
        <p className={styles.desc}>{posts[index]?.body}</p>
        </div>            
    </div>
  )
}

export default BlogCard;