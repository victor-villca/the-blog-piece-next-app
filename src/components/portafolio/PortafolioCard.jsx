import React from 'react'
import Link from 'next/link'
import styles from './portafolio.module.css'

const PortafolioCard = ({link}) => {
  return (
    <div>
        <Link href={`/portafolio/${link.direction}`} key={link.id} className={`link${link.id}`}>
            <span className={styles.itemText}>{link.name}</span>
        </Link>
    </div>
  )
}

export default PortafolioCard;