"use client";
import React, { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState({
    name: "",
    company: "",
    category: "",
    color: "",
    price: ""
  });

  // DESTRUCTURING 
  const { name, company, category, color, price } = products;

  const onInputChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      company,
      category,
      price,
      color
    }

    const res = await fetch('http://localhost:8080/api/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json();
    // console.log(data);
    setProducts(data);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Company Name"
            name="company"
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Category Name"
            name="category"
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Color Name"
            name="color"
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="Enter Price"
            name="price"
            style={{ width: 300, height: 30 }}
            onChange={onInputChange}
          />
        </div>

        <input
          type="submit"
          value="SUBMIT"
          style={{
            color: "#fff",
            background: "#0073c7",
            border: 0,
            padding: 10,
            width: 300,
          }}
        />
      </form>
    </div>
  );
};

export default AddProduct;
