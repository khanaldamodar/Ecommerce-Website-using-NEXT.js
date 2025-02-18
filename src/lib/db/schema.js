import { sql } from "drizzle-orm";
import { serial, pgTable, varchar, text,  timestamp, integer,  } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    fname: varchar("fname",{length:100}).notNull(),
    lname: varchar("lname", {length: 100}).notNull(),
    email: varchar("email").unique(),
    provider: varchar("provider", {length:20}),
    externalId: varchar("external_id", {length:20}).notNull(),
    image: text("image"),
    role: varchar("role", {length:12}).notNull().default("customer") ,
    updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    })


    export const products = pgTable("products", {
        id: serial("id").primaryKey(),
        name:varchar("name", {length:100}).notNull(),
        image: text("image").notNull(),
        description: text("description").notNull(),
        price: integer("price").notNull(),
        updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
        createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
    })

    export const orders = pgTable("orders",{

    })