import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaWhatsapp, FaYoutube, FaGlobe, } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGlobe />,
    url: "https://the-blog-piece.vercel.app/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/victor-villca/the-blog-piece-next-app",
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <p className="footer-title">Follow me</p>
        <ul className="social-links">
          {socialLinks.map((link) => (
            <Link
              href={link.url}
              target="__blank"
              key={link.id}
              className="social-link"
            >
              <i className="social-icon">{link.icon}</i>
            </Link>
          ))}
        </ul>
        </div>
      <p className={styles.text}>&copy; {currentYear} The Blog Piece. All Rights Reserved.</p>
    </div>
  )
}

export default Footer