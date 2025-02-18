import { db } from "@/lib/db/db";
import { dileveryPersons } from "@/lib/db/schema";
import { deliveryPersonSchema } from "@/lib/validators/deliveryPersonSchema";
import { NextResponse } from "next/server";
export async function POST(request) {

    const requestData = await request.json();

    let validatedData;
    try {
        validatedData = await deliveryPersonSchema.parse(requestData)
        
    } catch (error) {
        return NextResponse.json({message:"Failed to insert data"}, {status:400})
        
    }

    try {

        await db.insert(dileveryPersons).values(validatedData)
        return NextResponse.json({message:"OK"}, {status:201})
        
    } catch (error) {
        
        return NextResponse.json({message:"Faile to insert deliveryPerson"}, {status:500})
    }
    
}