import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.block}>
      <h1 className={styles.title}>Welcome to</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti maxime, natus repudiandae dolore ea nihil id blanditiis consectetur dolorum, velit numquam quam et? Nesciunt aliquam dicta officiis corporis sapiente?</p>
      <Button text={"CONTACT US"} url={"/contact"} />
    </div>
    <div className={styles.block}>
      <Image className={styles.img} width={500} height={500} src={"https://images.unsplash.com/photo-1636036769389-343bb250f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"} alt='' />
    </div>
   </div>
  )
}
