import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbconfig";
import Workspace from "@/models/Workspace";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "@/models/User";

// GET - Get single workspace by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    const workspace = await Workspace.findOne({
      _id: params.id,
      members: user._id,
    }).populate("members", "name email");

    if (!workspace)
      return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json({ workspace });
  } catch (error) {
    console.error("GET workspace error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// PATCH - Update workspace (name/description)
export async function PATCH(req, { params }) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    const { name, description } = await req.json();

    const workspace = await Workspace.findOneAndUpdate(
      { _id: params.id, createdBy: user._id },
      { $set: { name, description } },
      { new: true }
    );

    if (!workspace)
      return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });

    return NextResponse.json({ workspace });
  } catch (error) {
    console.error("PATCH workspace error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// DELETE - Delete workspace
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });

    const deleted = await Workspace.findOneAndDelete({
      _id: params.id,
      createdBy: user._id,
    });

    if (!deleted)
      return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 });

    return NextResponse.json({ message: "Workspace deleted successfully" });
  } catch (error) {
    console.error("DELETE workspace error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
