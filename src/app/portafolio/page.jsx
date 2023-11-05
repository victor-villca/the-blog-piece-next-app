import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import portafolioLinks from '@/utils/portafolioLinks'

export const metadata = {
  title: 'The Blog Piece - Your portafolio',
  description: 'Your own portafolio',
}

const Portafolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose your gallery</h1>
      <div className={styles.items}>
        {portafolioLinks.map((link) => (
            <Link href={`/portafolio/${link.direction}`} key={link.id} className={styles.item}>
              <span className={styles.itemText}>{link.name}</span>
            </Link>
        ))
      }
      </div>
    </div>
  )
}

export default Portafolio