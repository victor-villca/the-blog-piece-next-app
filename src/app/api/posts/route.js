import { NextResponse } from "next/server"
import connect from "@/utils/dbConnection"
import Post from "@/models/PostModel";

export const GET = async (req, res) => {
    try {
        await connect();

        const posts = await Post.find();

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error",  {status: 500})
    }
}
