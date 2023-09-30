import Image from 'next/image'
import styles from './page.module.css'
import HomeImage from 'public/hero.png'
import Button from '@/components/button/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      {/*<Image height={500} width={500} src={'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600'} alt='web'/>*/}
      <div className={styles.item}>
        <h1 className={styles.title}>
          This is h1 title for the Home Page
        </h1>
        <p className= {styles.desc}>
          this is the parragraph for the home page, i do not want to use lorem, so i am practicing my writting speed right now. more textt moreee, i am creating a blog next js web site
        </p>
        <Button
          txt = "See more"
          hrfe={"/about"}
         />
      </div>
      <div className={styles.item}>
        <Image src={HomeImage} alt='web'className={styles.img}/>
      </div>
      
    </div>
  )
}
