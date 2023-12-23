import connectDB from "@/lib/db";
import Product from "@/lib/model/productsModel";
import { NextResponse } from "next/server";

export const PUT = async (req, content) => {
  const payload = await req.json();
  const productId = content.params.id;
  console.log(payload);

  await connectDB();

  try {
    // Specify the update data you want to apply
    const updateData = {
      /* Add your update fields here */
    };

    // Use the update data in the findOneAndUpdate method
    const updateProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { new: true }
    );

    if (!updateProduct) {
      // Handle the case where the product with the given ID is not found
      return NextResponse.json(
        { message: "PRODUCT NOT FOUND", result: false },
        { status: 404 }
      );
    }

    console.log("updateProduct", updateProduct);
    return NextResponse.json(
      { message: "PRODUCT SUCCESSFULLY UPDATED", result: true },
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error(error);
    return NextResponse.json(
      { message: "INTERNAL SERVER ERROR", result: false },
      { status: 500 }
    );
  }
};


export const GET = async (req, content) => {
    const productId = content.params.id;
    console.log(productId);
    
    await connectDB();
    const product = await Product.findById({ _id: productId });

    return NextResponse.json({ result: product, success:true }, { status: 200 });
}


export const DELETE = async (req, content) => {
  const productId = content.params.id;
  await connectDB();
  const deleteProduct = await Product.deleteOne({ _id: productId });

  return NextResponse.json({ message: "PRODUCT SUCCESSFULLY DELETED", result: deleteProduct }, { status: 200 });
}