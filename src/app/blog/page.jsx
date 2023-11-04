import 'dotenv/config'
import styles from './page.module.css'
import { createClient } from 'pexels';
import BlogCard from '@/components/blog/BlogCard';

// async function getCuratedPhotos(count) {
//   const client = createClient(process.env.PEXEL_CLIENT);
//   const response = await client.photos.curated({ per_page: count });
//   return response.photos;
// }
async function getJsonPlaceholderData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return res.json();
}

const Blog = async () => {
  const posts = await getJsonPlaceholderData()
  return (
    <div className={styles.container}>
        {posts.map(( post, index) => (
          <BlogCard             
            post={post}
            key={index}
          />
      )
      )}
    </div>
  )
}

export default Blog