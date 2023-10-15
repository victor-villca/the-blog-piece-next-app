import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogIdPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Title Blog</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa animi aspernatur repellendus, assumenda fugit.</p>
          <div className={styles.authorContainer}>
            <Image 
            className ={styles.imgAuthor}
            src={"https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            height={50}
            width={50}
            alt='author img'
            />
            <p className={styles.author}>
              Martin Anthony Lutero
            </p>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image
          src={"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          className={styles.imgBig}
          fill= {true}
          alt='big image'
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus et dolore natus quibusdam magni, neque provident, quas nulla eius ab tempore hic! Ad repellat deserunt similique minima officiis molestias, aliquid itaque! Aliquid velit aut qui! Architecto deleniti magni consequuntur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non vel illo doloremque autem consequuntur sunt ab mollitia totam accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil repellendus neque assumenda iure voluptate ea magnam, magni consequatur animi similique earum suscipit id vel.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus et dolore natus quibusdam magni, neque provident, quas nulla eius ab tempore hic! Ad repellat deserunt similique minima officiis molestias, aliquid itaque! Aliquid velit aut qui! Architecto deleniti magni consequuntur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non vel illo doloremque autem consequuntur sunt ab mollitia totam accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil repellendus neque assumenda iure voluptate ea magnam, magni consequatur animi similique earum suscipit id vel.</p>
      </div>
    </div>
  )
}

export default BlogIdPost