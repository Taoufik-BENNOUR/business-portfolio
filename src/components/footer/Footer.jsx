import Image from "next/image"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>©2023 Taoufik,All Rights Reserved.</p>
      <div className={styles.social}>
        <Image src="/images/icon-facebook.png" className={styles.icon} width={15} height={15} alt="facebook" />
        <Image src="/images/icon-facebook.png" className={styles.icon} width={15} height={15} alt="tweeter" />
      </div>
    </div>
  )
}

export default Footer