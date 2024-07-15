import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect(process.env.uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error('Database connection error: ' + error);
    }
}
export default dbConnect