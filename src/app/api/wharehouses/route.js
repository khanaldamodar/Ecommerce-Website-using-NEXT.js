import { db } from "@/lib/db/db";
import { wharehouses } from "@/lib/db/schema";
import { wharehouseSchema } from "@/lib/validators/wharehouseSchema";
import { NextResponse } from "next/server";

export  async function POST(req) {
    const requestData = await req.json()

    let validatedData;

    try {
        validatedData = await wharehouseSchema.parse(requestData)
        
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
        
    }
    try {
        await db.insert(wharehouses).values(validatedData)
        return NextResponse.json({message: "OK"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to store Wharehouse"}, {status: 500})

    }
}