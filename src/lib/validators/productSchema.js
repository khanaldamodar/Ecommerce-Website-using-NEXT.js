import { z } from "zod";

export const  productSchema = z.object({
    name:z.string({message:"Product should be string"}),
    image: z.instanceof(File, {message: "Product image should be a imagr"}),
    description: z.string({message: "Product desc should ne a string "}),
    price: z.number({message: "Product price should be a number"}) 
})