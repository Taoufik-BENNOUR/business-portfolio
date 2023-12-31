"use client"
import Link from 'next/link'
import styles from './page.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [{
  id:1,
  title:"About",
  url:"/about"
},
{
  id:2,
  title:"Blog",
  url:"/blog"
},
{
  id:Math.random(),
  title:"Portfolio",
  url:"/portfolio"
},
{
  id:3,
  title:"Contact",
  url:"/contact"
},
{
  id:4,
  title:"Dashboard",
  url:"/dashboard"
}
]
const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Home</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map(link=><Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>)}
        {session.status==="authenticated"&& <button className={styles.logout} onClick={signOut}>logout</button>}
     
      </div>
    </div>
  )
}

export default Navbar