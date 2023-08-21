"use client"
import Link from "next/link"
import styles from "./page.module.css"
import Button from "@/components/button/Button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Register = () => {
  const [err, seterr] = useState("")
  const router = useRouter();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
try {
  const response = await fetch("/api/auth/register",
  {method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
body:JSON.stringify({
  name,email,password
})
})
(response.status === 201) && router.push('/dashboard/login');

} catch (error) {
  seterr(error.message);}
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="name" required />
        <input className={styles.input} type="email" placeholder="email" required />
        <input className={styles.input} type="password" placeholder="password" required />
        <button className={styles.button}>Register</button>
      </form>
      <Link href="/dashboard/login">Login with exist account</Link>
      {err&&err}
    </div>
  )
}

export default Register