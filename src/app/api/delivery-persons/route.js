import { db } from "@/lib/db/db";
import { dileveryPersons, wharehouses } from "@/lib/db/schema";
import { deliveryPersonSchema } from "@/lib/validators/deliveryPersonSchema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestData = await request.json();

  let validatedData;
  try {
    validatedData = await deliveryPersonSchema.parse(requestData);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to insert data" },
      { status: 400 }
    );
  }

  try {
    await db.insert(dileveryPersons).values(validatedData);
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Faile to insert deliveryPerson" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const getAllDeliveryPersons = await db
      .select({
        id: dileveryPersons.id,
        name: dileveryPersons.name,
        phone: dileveryPersons.phone,
        warehouse: wharehouses.name
      })
      .from(dileveryPersons)
      .leftJoin(wharehouses, eq(dileveryPersons.warehouseId, wharehouses.id))
      .orderBy(desc(dileveryPersons.id));
    return NextResponse.json(getAllDeliveryPersons);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch Delivery Person" },
      { status: 500 }
    );
  }
}
