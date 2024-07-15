// import  connect  from "../../../../dbConfig/dbConfig";
// import User from "../../../../models/userModels";
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// // Connect to the database
// connect();

// export async function POST(request) {
//     try {
//         const reqBody = await request.json();
//         const { username, password } = reqBody;
//         console.log(reqBody);

//         // Check if user exists
//         const user = await User.findOne({ username });
//         if (!user) {
//             return NextResponse.json({ error: "User does not exist" }, { status: 400 });
//         }
//         console.log("User exists");

//         // Check if password is correct
//         const validPassword = await bcryptjs.compare(password, user.password);
//         if (!validPassword) {
//             return NextResponse.json({ error: "Invalid password" }, { status: 400 });
//         }
//         console.log(user);

//         // Create token data
//         const tokenData = {
//             id: user._id,
//             username: user.username,
//         };

//         // Create token
//         const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

//         const response = NextResponse.json({
//             message: "Login successful",
//             success: true,
//         });

//         response.cookies.set("token", token, {
//             httpOnly: true,
//             sameSite: 'strict',
//             secure: process.env.NODE_ENV === 'production',
//         });

//         return response;

//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// export function GET() {
// return {test: 'aaaaa', ttt:'aaaa'}
// }
