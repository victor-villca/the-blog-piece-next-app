'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'pexels';


async function getCuratedPhotos(count) {
  const client = createClient('BHcip3yhA3H3l3zet6335GbGYIQLPvDWvhmUgJniQ398RmzjAxnXbBoZ');
  const response = await client.photos.curated({ per_page: count });
  return response.photos;
}
async function getJsonPlaceholderData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return res.json();
}

const Blog = async () => {
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);
  const numberOfItems = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curatedPhotos = await getCuratedPhotos(numberOfItems);
        setPhotos(curatedPhotos);

        const jsonData = await getJsonPlaceholderData();
        setPosts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
        {photos.map((photo, index) => (
          <Link href={`/blog/blog-${index+1}-${photo.id}`} key={index} className={styles.blogContainer}>
              <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                width={400}
                height={250}
                src={photo.src.large}
                alt={photo.alt}
              />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{posts[index]?.title}</h1>
              <p className={styles.desc}>{posts[index]?.body}</p>
            </div>
          </Link> 
      )
      )}
    </div>
  )
}

export default Blog