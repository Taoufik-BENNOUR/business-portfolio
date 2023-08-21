import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/Button"

export const metadata = {
  title: 'Business Contact',
  description: 'Business Portfolio',
}
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} fill src={"https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"} alt='' />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textarea} name="message" placeholder="message" id="" cols="30" rows="10"></textarea>
          <Button url={"#"} text={"SEND"}/>
        </form>
      </div>
    </div>
  )
}

export default Contact