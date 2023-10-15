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
  const posts = await getJsonPlaceholderData()
  const photos = await getCuratedPhotos(100)
  return (
    <div className={styles.container}>
        {photos.map((photo, index) => (
          <div className={styles.blogContainer}>
              <Link href={`/blog/blog-${index+1}-${photo.id}`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    width={400}
                    height={250}
                    src={photo.src.large}
                    alt={photo.alt}
                  />
                </div>
              </Link> 
              <div className={styles.textContainer}>
                <Link href={`/blog/blog-${index+1}-${photo.id}`}>
                  <h1 className={styles.title}>{posts[index]?.title}</h1>
                </Link> 
                <p className={styles.desc}>{posts[index]?.body}</p>
              </div>            
          </div>

      )
      )}
    </div>
  )
}

export default Blog