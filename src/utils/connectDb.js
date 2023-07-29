import mongoose from "mongoose";


const connectDb =async()=>{
    try {    
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
        throw new Error("database connection failed!",error)
    }
}
export default connectDb;
