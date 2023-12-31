import { NextResponse } from "next/server"
import connectDb from "@/utils/connectDb"
import Post from "@/models/Post";

export const GET = async()=>{
    try {
        await connectDb();
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts),{status:200})

    } catch (error) {
        return new NextResponse(error,{status:500})
    }
}