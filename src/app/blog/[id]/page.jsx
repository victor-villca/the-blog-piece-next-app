import styles from './page.module.css'
import Image from 'next/image'
import { createClient } from 'pexels';
async function getPhotoId(id) {
  const client = createClient(process.env.PEXEL_CLIENT);
  const photoId = parseInt(id.split('-')[2]);
  const photo = await client.photos.show({ id: photoId });
  if (!photo) {
    throw new Error('Failed to fetch photo data');
  }
  
  return photo;
}

async function getJsonBlogData(id) {
  const res = await fetch(`${process.env.POSTS_API}/${id.split('-')[1]}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data' + `${process.env.POSTS_API}/${id}`);
  }
  return res.json();
}

const BlogIdPost = async ({params}) => {
  const blogData = await getJsonBlogData(params.id)
  const photoPexels = await getPhotoId(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{blogData.title}</h1>
          <p className={styles.desc}>{blogData.body}</p>
          <div className={styles.authorContainer}>
            <Image 
            className ={styles.imgAuthor}
            src={"https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            height={50}
            width={50}
            alt='author img'
            loading="lazy"
            />
            <p className={styles.author}>
              {photoPexels.photographer}
            </p>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image
          src={photoPexels.src.original}
          className={styles.imgBig}
          width={550}
          height={300}
          alt={photoPexels.alt}
          loading="lazy"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{blogData.body}</p>
        <p>{blogData.body}</p>
        <p>{blogData.body}</p>
        <p>{blogData.body}</p>
        <p>{blogData.body}</p>
        <p>{blogData.body}</p>
      </div>
    </div>
  )
}

export default BlogIdPost