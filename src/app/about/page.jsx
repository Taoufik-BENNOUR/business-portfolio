import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/Button"

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={"https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"} fill={true} />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital</h1>
            <h2 className={styles.imgDescription}>esport team</h2>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.block}>
            <h1 className={styles.title}>Who we are</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque repudiandae obcaecati aliquid ut ad recusandae officia voluptate dolor ullam, consequuntur vel natus illum doloremque aperiam tempore fuga ex. Ducimus.</p>
          </div>
          <div className={styles.block}>
            <h1 className={styles.title}>What we do</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque repudiandae obcaecati aliquid ut ad recusandae officia voluptate dolor ullam, consequuntur vel natus illum doloremque aperiam tempore fuga ex. Ducimus.</p>
            <Button url="contact" text={"CONTACT"}/>
          </div>
        </div>
    </div>
  )
}

export default About