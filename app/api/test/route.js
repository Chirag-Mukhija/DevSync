import dbConnect from "@/lib/mongoDb" ;
import {NextResponse} from "next/server";

export  async function GET(request){
    try{
        const result = await dbConnect(); 
        console.log("Database connected successfully");
        return NextResponse.json({message: "Database connected successfully"}, {status: 200});
    }catch(err){
        console.error("Database connection failed", err);
        return NextResponse.json({message: "Database connection failed"}, {status: 500});
    }
}