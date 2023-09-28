import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const imageKeys = [1,2,3,4]
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>footer</div>
      <div className={styles.icons}>
          {imageKeys.map( (key) => (
            <Image  className={styles.icon} key={key} src={`/${key}.png`} width={20}  height={20} alt='social icon' />
          )
          )}
      </div>
    </div>
  )
}

export default Footer