import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaWhatsapp, FaYoutube, FaGlobe, } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGlobe />,
    url: "/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "/",
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <ul className={styles.links}>
          {socialLinks.map((link) => (
            <Link
              href={link.url}
              target="__blank"
              key={link.id}
              className={styles.link}
            >
              <i className={styles.icon}>{link.icon}</i>
            </Link>
          ))}
        </ul>
        </div>
      <p className={styles.text}>&copy; {currentYear} The Blog Piece. All Rights Reserved.</p>
    </div>
  )
}

export default Footer