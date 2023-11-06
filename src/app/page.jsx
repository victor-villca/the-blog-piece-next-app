import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/general/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        The Blog Piece - Your Anime Blogging Hub
        </h1>
        <p className= {styles.desc}>
        Welcome to The Blog Piece, where your love for anime meets the blogosphere. Join our community, create blogs, and explore the anime world through the eyes of fellow fans.
        </p>
        <Button
          txt = "Start Blogging"
          hrfe={"/dashboard/register"}
         />
      </div>
      <div className={styles.itemImg}>
        <Image src={'/home.svg'} 
        alt='web'className={styles.img}
        width={500}
        height={500}
        />
      </div>
      
    </div>
  )
}
