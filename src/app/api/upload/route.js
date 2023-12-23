import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
    const data = await req.formData();
    const file = data.get('file');
    if(!file) {
        return NextResponse.json({ message:"Image is not found" }, { status: 400 });
    } else {
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/${file.name}`;
        await writeFile(path, buffer);
        return NextResponse.json({ message: "Image is Uploaded" }, { status:200 });
    }
}