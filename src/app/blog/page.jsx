import 'dotenv/config'
import styles from './page.module.css'
import { createClient } from 'pexels';
import BlogCard from '@/components/blog/BlogCard';

async function getCuratedPhotos(count) {
  const client = createClient(process.env.PEXEL_CLIENT);
  const response = await client.photos.curated({ per_page: count });
  return response.photos;
}
async function getJsonPlaceholderData() {
  const res = await fetch(process.env.POSTS_API, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return res.json();
}

const Blog = async () => {
  const posts = await getJsonPlaceholderData()
  const photos = await getCuratedPhotos(process.env.POSTS_PETIONS)
  return (
    <div className={styles.container}>
        {photos.map((photos, indexes) => (
          <BlogCard 
            photo={photos}
            index={indexes}      
            posts={posts}
            key={indexes}
          />
      )
      )}
    </div>
  )
}

export default Blog