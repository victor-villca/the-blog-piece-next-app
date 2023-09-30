import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/general/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.containerContent}>
        <div className={styles.imgContainer}>
            <Image 
            src={"/contact.png"}
            fill={true}
            alt='image contact'
            className={styles.img}
            />
        </div>
        <form className={styles.formContainer}>
            <input name='text' type="text" placeholder='Enter your name' className={styles.formItem}/>
            <input  name="text"type="text" placeholder='Enter your email' className={styles.formItem}/>
            <textarea name="textarea" id="" cols="30" rows="10" placeholder='Enter your message' className={styles.formItem}></textarea>
            <Button
              hrfe={"#"} 
              txt={"Send"}
             />

        </form>
      </div>
    </div>
  )
}

export default Contact