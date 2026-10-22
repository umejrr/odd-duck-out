import { NextResponse } from "next/server";

export const POST = async (request) =>{
    const {username, email, password} = await request.json();
    console.log(username, email, password);

    return new NextResponse('User has been created', {
        status: 201,
    });
    
}