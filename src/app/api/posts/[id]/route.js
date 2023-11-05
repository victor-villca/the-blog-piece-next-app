import { NextResponse } from "next/server"
import connect from "@/utils/dbConnection"
import Post from "@/models/PostModel";

export const GET = async (req, {params}) => {
    const {id} = params;
    try {
        await connect();

        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error",  {status: 500})
    }
}

export const DELETE = async (req, {params}) => {
    const {id} = params;
    try {
        await connect();

        const post = await Post.findByIdAndDelete(id);

        return new NextResponse("Post was deleted", {status: 200});
    } catch (error) {
        return new NextResponse("Database Error",  {status: 500})
    }
}
