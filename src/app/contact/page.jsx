import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/general/Button'

export const metadata = {
  title: 'The Blog Piece - Contact us',
  description: "Let's get to know more..",
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Get in Touch with The Blog Piece Team</h1>
        <p className={styles.message}>Feel free to contact us regarding bugs or feature requests. Your feedback drives our improvements.</p>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.imgContainer}>
            <Image 
            src={"/email.svg"}
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