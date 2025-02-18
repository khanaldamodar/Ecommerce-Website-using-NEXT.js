import { db } from "@/lib/db/db";
import { inventories, products, wharehouses } from "@/lib/db/schema";
import { inventoriesSchema } from "@/lib/validators/inventoriesSchema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestData = await request.json();

  let validatedData;

  try {
    validatedData = inventoriesSchema.parse(requestData);
  } catch (error) {
    return NextResponse.json(
      { message: err },
      { status: 500 }
    );
  }

  try {
    await db.insert(inventories).values(validatedData);
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to insert inventory Details" },
      { status: 500 }
    );
  }
}


export async function GET(request) {

    try {
        const getallinventoriesData = await db.select({
            id:inventories.id,
            sku: inventories.sku,
            warehouse: wharehouses.name,
            product:products.name
        }).from(inventories)
        .leftJoin(wharehouses, eq(inventories.warehouseId, wharehouses.id))
        .leftJoin(products, eq(inventories.id, products.id))
        .orderBy(desc(inventories.id))
    return NextResponse.json(getallinventoriesData)
} catch (error) {
    return NextResponse.json({message:"Failed to read Inventory details "}, {status: 500})
    
    }
    
}