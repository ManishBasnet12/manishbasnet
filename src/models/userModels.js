import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
    },
    weblink: {
        type: String,
        required: [true, "Please provide a Website Link"],
    },
    message: {
        type: String,
        required: [true, "Please provide a Message"],
    },
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;