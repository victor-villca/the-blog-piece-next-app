import React from 'react'
import styles from './page.module.css'
import Button from '@/components/general/Button'
import Image from 'next/image'
import {items} from './data'
import {notFound} from 'next/navigation'

const getData = (cat) =>{
  const data = items[cat]
  if(!data){
    return notFound()
  }
  return data;
}

function Category({params}) {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((cat) =>(
        <div className={styles.item} key={cat.id}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{cat.title}</h1>
            <p className={styles.desc}>{cat.desc}</p>
            <Button 
            hrfe={"#"}
            txt={"See more"}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            fill={true}
            src={cat.image}
            alt='image'
            loading="eager"
            />
          </div>
        </div>
      ))}
   </div>
  )
}

export default Category