import { connect } from "../../../dbConfig/dbConfig";
import User from "../../../models/userModels";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { fullname, email, weblink, message } = reqBody;

    console.log(reqBody);

    const newContact = new User({
      fullname,
      email,
      weblink,
      message,
    });

    const savedContact = await newContact.save();
    console.log(savedContact);

    return NextResponse.json({
      message: "Send Successful",
      success: true,
      savedContact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



// export const GET = async (request) => {
//   // Connect to the database

//   try {
    

//       const results = await User.find({});
//       const response = new NextResponse(JSON.stringify({
//           results
//       }), { status: 200 });

//       return response;
//   } catch (err) {
//       console.error('Error:', err);
//       const errorResponse = new NextResponse(JSON.stringify({ message: err.message }), { status: 500 });
//       return errorResponse;
//   }
// }