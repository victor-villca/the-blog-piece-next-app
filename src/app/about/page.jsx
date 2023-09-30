import React from 'react'
import Button from '@/components/general/Button'
import styles from './page.module.css'
import Image from 'next/image'

export default function About(){
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src={"https://images.pexels.com/photos/7889179/pexels-photo-7889179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        fill={true}
        alt='about us image' 
        className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About our Company</h1>
          <h2 className={styles.imgDesc}>We are a new company from people to our people</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
              <h1>Who are we?</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium quos, excepturi corrupti voluptatum culpa, impedit eius fugit odio similique officiis tempora cum inventore, minus earum adipisci ab dolore cumque labore. Eum quibusdam odio consequatur cupiditate soluta voluptate aliquam dolore expedita molestias, repellat tenetur porro facilis doloribus, suscipit tempora aspernatur ab quae asperiores provident? Eius impedit tempore hic doloremque veniam, reiciendis consectetur consequatur. Et saepe repellendus labore nostrum pariatur quae quis sit mollitia maiores odio nulla unde harum reiciendis consectetur a, velit dicta ullam eligendi nemo perferendis nesciunt in quod? Minus maxime ullam magnam totam dolorum repellat, magni quidem ab?</p>
          </div>
          <div className={styles.item}>
              <h1>What do we do?</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit:
                 -Vitae accusantium quos, excepturi corrupti voluptatum culpa, 
                 -impedit eius fugit odio similique officiis tempora cum inventore, minus earum adipisci ab dolore cumque labore. 
                 -Eum quibusdam odio consequatur cupiditate soluta voluptate aliquam dolore expedita molestias, repellat tenetur porro facilis doloribus, 
                 -suscipit tempora aspernatur ab quae asperiores provident? Eius impedit tempore hic doloremque veniam, reiciendis consectetur consequatur. 
                 Et saepe repellendus labore nostrum pariatur quae quis sit mollitia maiores odio nulla unde harum reiciendis consectetur a, velit dicta ullam eligendi nemo perferendis nesciunt in quod? Minus maxime ullam magnam totam dolorum repellat, magni quidem ab?
              </p>
              <Button
              hrfe={"/contact"}
              txt={"Contact"}
               />

          </div>

      </div>
    </div>
  )
}
