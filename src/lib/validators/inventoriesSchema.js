import { z } from "zod";

export const inventoriesSchema = z.object({
    sku: z.string({message:"must ne string"}).length(8, "SKU length must be 8 char long"),
    // orderId: z.number({message:"must be number"}),
    warehouseId: z.number({message:"must be number"}),
    productId: z.number({message:"must be number"}),

})