import React from 'react'
import Button from '@/components/general/Button'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: 'The Blog Piece - About us',
  description: 'Get to know more about our blog',
}

export default function About(){
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src={"/aboutus-bg.png"}
        fill={true}
        alt='about us image' 
        className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About us</h1>
          <h2 className={styles.imgDesc}>We are Anime Lovers, and We Built The Blog Piece for You!</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
              <h1>Who are we?</h1>
              <p>We are The Blog Piece, a dedicated team of independent developers who have created this blog app to empower anime enthusiasts. Our goal is to provide a platform where users can effortlessly create, manage, and enjoy reading anime blogs.</p>
          </div>
          <div className={styles.item}>
              <h1>What do we do?</h1>
              <p>
              At The Blog Piece, we are passionate about fostering a vibrant anime community. We provide a user-friendly web app that enables you to create and manage your anime blogs. Whether you&apos;re an aspiring writer or a dedicated reader, our platform is your gateway to the world of captivating anime content. We&apos;re here to make your anime blogging experience enjoyable and memorable.
              </p>
          </div>

      </div>
    </div>
  )
}
