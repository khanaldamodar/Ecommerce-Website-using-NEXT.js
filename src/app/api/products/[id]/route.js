import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";


export async function GET(req, { params }) {
  const id = params.id;

  try {
      const product = await db
        .select()
        .from(products)
        .where(eq(products.id, Number(id)))
        .limit(1);
        
        if (!product.length) {
          return NextResponse.json({ message: "Product not found" }, { status: 500 });
        }
        return NextResponse.json(product[0]);

  } catch (error) {
      return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
    
  }
  

}
