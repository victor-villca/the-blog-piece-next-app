import React from 'react'
import styles from './page.module.css'
import Button from '@/components/general/Button'
import Image from 'next/image'
function Category({params}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button 
          hrfe={"#"}
          txt={"See more"}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt='image'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button 
          hrfe={"#"}
          txt={"See more"}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt='image'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button 
          hrfe={"#"}
          txt={"See more"}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          fill={true}
          src={"https://images.pexels.com/photos/18497824/pexels-photo-18497824/free-photo-of-fashion-people-woman-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt='image'
          />
        </div>
      </div>
   </div>
  )
}

export default Category