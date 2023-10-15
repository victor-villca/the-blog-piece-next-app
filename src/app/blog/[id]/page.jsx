import styles from './page.module.css'
import Image from 'next/image'
import { createClient } from 'pexels';
async function getPhotoId(id) {
  const client = createClient('BHcip3yhA3H3l3zet6335GbGYIQLPvDWvhmUgJniQ398RmzjAxnXbBoZ');
  const photoId = parseInt(id.split('-')[2]);
  const photo = await client.photos.show({ id: photoId });
  if (!photo) {
    throw new Error('Failed to fetch photo data');
  }
  
  return photo;
}

async function getJsonPlaceholderData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.split('-')[1]}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data' + `https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  return res.json();
}

const BlogIdPost = async ({params}) => {
  const placeholderData = await getJsonPlaceholderData(params.id)
  const photoPexels = await getPhotoId(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{placeholderData.title}</h1>
          <p className={styles.desc}>{placeholderData.body}</p>
          <div className={styles.authorContainer}>
            <Image 
            className ={styles.imgAuthor}
            src={"https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            height={50}
            width={50}
            alt='author img'
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
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{placeholderData.body}</p>
        <p>{placeholderData.body}</p>
        <p>{placeholderData.body}</p>
        <p>{placeholderData.body}</p>
        <p>{placeholderData.body}</p>
        <p>{placeholderData.body}</p>
      </div>
    </div>
  )
}

export default BlogIdPost