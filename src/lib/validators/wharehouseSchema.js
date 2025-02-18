import { z } from "zod";

export const  wharehouseSchema = z.object({
    name:z.string({message:"Product should be string"}),
    pincode: z.string({message: "pincode should be in String"}, {length:6 })
})