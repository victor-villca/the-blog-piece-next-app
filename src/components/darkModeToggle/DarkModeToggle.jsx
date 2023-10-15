'use client'
import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'
const DarkModeToggle = () => {
	const context = useContext(ThemeContext);

  const { toggle, mode } = context;
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>☀️</div>
        <div className={styles.ball} style={mode === 'dark' ? {left: "2px"} : {right: "2px"}}></div>
    </div>
  )
}

export default DarkModeToggle