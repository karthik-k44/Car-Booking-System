import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const Databaseurl= process.env.DATABASE_URL
const connectDatabase=async()=>{
    try{
        await mongoose.connect(Databaseurl)
        console.log("Database connected successfully")
    }
    catch(error)
    {
        console.log("Unable to connect database")
    }
}

export default connectDatabase