import connectDB from "@/lib/db";
import Product from "@/lib/model/productsModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();

  const products = await Product.find();
  console.log(products);

  return NextResponse.json(
    { message: "USER SUCCESSFULLY GET", result: products },
    { status: 200 }
  );
};

export const POST = async (req, res) => {
  await connectDB();
  const payload = await req.json();
  const product = await Product.create(payload);
  const saveProduct = await product.save();

  return NextResponse.json(
    { message: "USER SUCCESSFULLY ADDED", result: product },
    { status: 201 }
  );
};
