import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoDb";
import Workspace from "@/app/models/Workspace";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/app/models/User";

export async function GET() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    const workspaces = await Workspace.find({
      $or: [{ createdBy: user._id }, { members: user._id }],
    }).populate("members", "name email");

    return NextResponse.json({ workspaces });
  } catch (error) {
    console.error("GET /workspaces error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    const body = await request.json();
    const { name, description } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const newWorkspace = await Workspace.create({
      name,
      description,
      createdBy: user._id,
      members: [user._id],
    });

    return NextResponse.json({ workspace: newWorkspace }, { status: 201 });
  } catch (error) {
    console.error("POST /workspaces error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
