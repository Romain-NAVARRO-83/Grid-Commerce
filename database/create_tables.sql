BEGIN;
DROP TABLE IF EXISTS "order_detail" CASCADE;
DROP TABLE IF EXISTS "order" CASCADE;
DROP TABLE IF EXISTS "customer" CASCADE;
DROP TABLE IF EXISTS "category_product" CASCADE;
DROP TABLE IF EXISTS "category" CASCADE;
DROP TABLE IF EXISTS "product" CASCADE;
DROP TABLE IF EXISTS "shipments" CASCADE;
DROP TABLE IF EXISTS "shipment_details" CASCADE;



CREATE TABLE IF NOT EXISTS "product" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"name" varchar(250),
	"reference" varchar(255) NOT NULL UNIQUE,
	"description_short" varchar(255),
	"price" FLOAT DEFAULT '0',
	"picture_url" varchar(255),
	"stock" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "category" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"name" varchar(250) NOT NULL,
	"depth" INTEGER DEFAULT '0',
	"id_parent" bigint,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "category_product" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"id_product" bigint NOT NULL,
	"id_category" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "customer" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"password" varchar(16) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "order" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"reference" varchar(250) NOT NULL UNIQUE,
	"id_customer" bigint NOT NULL,
	"state" smallint NOT NULL,
	"date_creation" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "order_detail" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"id_order" smallint NOT NULL,
	"id_product" smallint NOT NULL,
	"quantity" smallint NOT NULL,
	"unit_price" numeric(10,0) NOT NULL,
	PRIMARY KEY ("id")
);
CREATE TABLE IF NOT EXISTS "shipments"(
	"id" SERIAL NOT NULL UNIQUE,
	"id_order" INTEGER NOT NULL,
	"date_creation" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY ("id")
);
CREATE TABLE IF NOT EXISTS "shipment_details"(
	"id" SERIAL NOT NULL UNIQUE,
	"id_shipment" INTEGER NOT NULL,
	"quantity" INTEGER NOT NULL,
	"date_creation" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY ("id")
);

ALTER TABLE "category_product" ADD CONSTRAINT "category_product_fk1" FOREIGN KEY ("id_product") REFERENCES "product"("id");

ALTER TABLE "category_product" ADD CONSTRAINT "category_product_fk2" FOREIGN KEY ("id_category") REFERENCES "category"("id");

ALTER TABLE "order" ADD CONSTRAINT "order_fk2" FOREIGN KEY ("id_customer") REFERENCES "customer"("id");
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_fk1" FOREIGN KEY ("id_order") REFERENCES "order"("id");

ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_fk2" FOREIGN KEY ("id_product") REFERENCES "product"("id");

ALTER TABLE "shipments" ADD CONSTRAINT "shipments_fk1" FOREIGN KEY ("id_order") REFERENCES "order"("id");

ALTER TABLE "shipment_details" ADD CONSTRAINT "shipments_details_fk1" FOREIGN KEY ("id_shipment") REFERENCES "shipments"("id");

COMMIT;