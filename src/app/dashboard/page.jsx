"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const session = useSession();
    const router = useRouter();
    if(session.status==="loading"){
      return <p>Loading</p>
    }
    if(session.status==="unauthenticated"){
      router.push("/dashboard/login")
    }
    if(session.status==="authenticated"){
      return (
        <div>
          <Link href={"/dashboard/login"}>Login</Link>
          <Link href={"/dashboard/register"}>register</Link>
        </div>
      )
    }

}

export default Dashboard