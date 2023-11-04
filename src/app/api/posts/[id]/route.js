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
