CREATE TABLE "wharehouses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"pincode" varchar(6) NOT NULL
);
--> statement-breakpoint
CREATE INDEX "pincode_idx" ON "wharehouses" USING btree ("pincode");