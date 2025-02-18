import { z } from "zod";


export const deliveryPersonSchema = z.object({
    name: z.string({message:"name must be in string"}),
    phone: z.string({message: "phone must be string"},{length:10} ),
    warehouseId: z.number({message:"wId must be number"})
})