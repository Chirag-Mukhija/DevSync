import dbConnect from "@/lib/dbconfig";
import {NextResponse} from "next/server";

export async function GET(request){
    const result = await dbConnect();
    console.log("Database connection result:", result);
    return NextResponse.json({Message : "database connected successfully"});
}