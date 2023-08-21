import { NextResponse } from "next/server"
import connectDb from "@/utils/connectDb"
import Post from "@/models/Post";

export const GET = async(req,{params})=>{
    const {id} = params
    try {
        await connectDb();
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post),{status:200})

    } catch (error) {
        return new NextResponse(error,{status:500})

    }
}