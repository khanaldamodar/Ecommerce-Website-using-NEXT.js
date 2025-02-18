import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema"; // Ensure the correct import
import { productSchema } from "@/lib/validators/productSchema";
import { NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import fs from "fs";
import { desc } from "drizzle-orm";

export async function POST(req) {
  //TODO: Check user access
  const data = await req.formData();

  // Get the file properly
  const file = data.get("image");
  if (!file || typeof file === "string") {
    return NextResponse.json({ message: "Image is required" }, { status: 400 });
  }

  let validatedData;
  try {
    validatedData = productSchema.parse({
      name: data.get("name"),
      description: data.get("description"),
      price: Number(data.get("price")),
      image: file, // Pass file object
    });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }

  // Ensure directory exists
  const uploadPath = path.join(process.cwd(), "public/assets");
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  // Process the file
  const extension = file.name.split(".").pop();
  const filename = `${Date.now()}.${extension}`;

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadPath, filename), buffer);
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to save the file to the file system" },
      { status: 500 }
    );
  }

  // Store product details in the database
  try {
    await db.insert(products).values({
      ...validatedData,
      image: filename, // Store only the filename
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to save product" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "OK" }, { status: 201 });
}
export async function GET() {
    try {
        const allproducts = await db.select().from(products).orderBy(desc(products.id));
        return NextResponse.json(allproducts)
        
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch data"},{status:500})
        
    }
    
    
}
