import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import  bcrypt  from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const {name,email,password} = await request.json();
    await connectDb();
    try {
        const hashedPassword = await bcrypt.hash(password,5)
        const newUser = new User({name,email,password:hashedPassword});
    await newUser.save();
    return new NextResponse("User created",{status:201})

    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}