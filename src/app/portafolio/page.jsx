import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portafolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose your gallery</h1>
      <div className={styles.items}>
        <Link href={"/portafolio/illustrations"} className={styles.item}>
            <span className={styles.itemText}>Ilustraitions</span>
        </Link>
        <Link href={"/portafolio/websites"} className={styles.item}>
            <span className={styles.itemText}>Websites</span>
        </Link>
        <Link href={"/portafolio/application"} className={styles.item}>
            <span className={styles.itemText}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portafolio