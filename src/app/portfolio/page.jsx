import Link from "next/link"
import styles from "./page.module.css"

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Events</h1>
      <div className={styles.items}>
        <Link href={"/portfolio/item1"} className={styles.item}  style={{background:'url("https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80")'}}  >
            <span className={styles.itemTitle}>item1</span>
        </Link>
        <Link href={"/portfolio/item2"} className={styles.item} >
            <span className={styles.itemTitle}>item1</span>
        </Link>
        <Link href={"/portfolio/item3"} className={styles.item} >
            <span className={styles.itemTitle}>item1</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio