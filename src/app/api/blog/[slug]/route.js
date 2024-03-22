//Using Api to fetch single blog post

import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
        connectToDB();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
        
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the post!")
    }
}