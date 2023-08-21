import Image from "next/image";
import styles from "./page.module.css";
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache:"no-store"
  })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
const BlogPost =async ({params}) => {
 const data = await getData(params.id)
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>
          {data.description}
        </p>
        <div className={styles.author}>
          <Image
            src={"https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"}
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>{data.username}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
            src={"https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"}
            alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       {data.content}
      </p>
    </div>
  </div>
  )
}

export default BlogPost