import { NextResponse } from "next/server"
import connect from "@/utils/dbConnection"
import Post from "@/models/PostModel";
import PostModel from "@/models/PostModel";

export const GET = async (req) => {
    const url = new URL(req.url)

    const author = url.searchParams.get("username")
    try {
        await connect();

        const posts = await Post.find(author &&{author});

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error",  {status: 500})
    }
}

export const POST = async (req) => {
    const body = await req.json()
    const newPost = new PostModel(body);
    try {
        await connect();

        await newPost.save();
        return new NextResponse("Post has been correctly created", {status: 201});
    } catch (error) {
        return new NextResponse("Database Error",  {status: 500})
    }
}
