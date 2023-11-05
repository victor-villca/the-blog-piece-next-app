'use client'
import 'dotenv/config'
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import BlogCard from '@/components/blog/BlogCard';

export const metadata = {
  title: 'The Blog Piece - Blogs',
  description: "Your personalized blogs",
}
const Blog = async () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          throw new Error('Failed to fetch blog data');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  },[])
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