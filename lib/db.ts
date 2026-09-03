import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;
if(!MONGODB_URI){
    throw new Error(
        "please define the MONGODB_URI  environment variable inside .env"
    );
}

interface MongooseCache{
    conn: type0f mongoose | null;
    promise: Promise<typeof mongoose > | null;
}