"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('file', file);
    let res = await fetch('http://localhost:8080/api/upload', {
      method: "POST",
      body: data
    });
    res = await res.json();
    console.log(res);
    if(res.success) {
      alert("Image is Upload");
    }
  }
  return (
   <>
   <h1>Image File Upload</h1>
   <form onSubmit={onSubmit}>
    <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />

    <input type="submit" value="Upload Image" />
   </form>
   </>
  )
}
