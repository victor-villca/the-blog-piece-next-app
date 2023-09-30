import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

const Button = ({txt, hrfe}) => {
  return (
    <Link href={hrfe}>
        <button className={styles.button}>{txt}</button>
    </Link>
  )
}

export default Button